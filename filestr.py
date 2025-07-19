import os

def create_file_structure_text(root_path, output_file, max_depth=None, exclude_dirs=None):
    """
    Creates a text representation of a directory structure.
    
    Args:
        root_path (str): Path to the root directory to map
        output_file (str): Path to the output text file
        max_depth (int, optional): Maximum depth to traverse
        exclude_dirs (list, optional): List of directory names to exclude
    """
    
    if exclude_dirs is None:
        exclude_dirs = ['DATA','public','node_modules', '.git', '__pycache__', '.vscode', '.idea', 'dist', 'build']
    
    def get_structure(path, prefix="", current_depth=0):
        """Recursively build the directory structure string."""
        if max_depth is not None and current_depth > max_depth:
            return ""
        
        structure = ""
        try:
            items = sorted(os.listdir(path))
            # Filter out excluded directories
            filtered_items = []
            for item in items:
                item_path = os.path.join(path, item)
                if os.path.isdir(item_path) and item in exclude_dirs:
                    continue  # Skip excluded directories
                filtered_items.append(item)
            
            for i, item in enumerate(filtered_items):
                item_path = os.path.join(path, item)
                is_last = i == len(filtered_items) - 1
                
                # Choose the appropriate tree symbols
                connector = "└── " if is_last else "├── "
                extension = "    " if is_last else "│   "
                
                structure += f"{prefix}{connector}{item}\n"
                
                # If it's a directory, recurse into it
                if os.path.isdir(item_path):
                    structure += get_structure(
                        item_path, 
                        prefix + extension, 
                        current_depth + 1
                    )
                        
        except PermissionError:
            structure += f"{prefix}[Permission Denied]\n"
            
        return structure
    
    # Generate the structure
    root_name = os.path.basename(root_path) or root_path
    structure = f"{root_name}/\n"
    structure += get_structure(root_path)
    
    # Write to file
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(structure)
    
    print(f"File structure written to: {output_file}")
    return structure

# Example usage
if __name__ == "__main__":
    # Map current directory
    current_dir = "."
    output_path = "file_structure.txt"
    
    # Create the structure (limit depth to avoid huge outputs)
    # Excludes node_modules, .git, __pycache__, and other common folders by default
    structure = create_file_structure_text(current_dir, output_path, max_depth=3)
    
    # You can also customize which directories to exclude:
    # custom_excludes = ['node_modules', 'venv', 'env', '.git', 'target']
    # structure = create_file_structure_text(current_dir, output_path, max_depth=3, exclude_dirs=custom_excludes)
    
    # Also print to console
    print("Directory structure:")
    print(structure)