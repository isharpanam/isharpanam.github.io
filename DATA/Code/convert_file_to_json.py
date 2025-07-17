#!/usr/bin/env python3
"""
Pooja Items Configuration Generator
Generates TypeScript configuration for all 18 poojas from CSV data
"""

import pandas as pd
import re
import os
from datetime import datetime

def main():
    """Main function to generate pooja items configuration"""
    
    # Read the CSV file
    try:
        df = pd.read_csv('quantity_of_items.csv')
        print("✅ CSV file loaded successfully")
        print(f"📊 Dataset shape: {df.shape}")
    except FileNotFoundError:
        print("❌ Error: 'quantity_of_items.csv' file not found!")
        return
    except Exception as e:
        print(f"❌ Error reading CSV file: {e}")
        return

    # Complete item name to ID mapping (fixed all issues)
    item_name_to_id = {
        'Coconut watered': 'coconut-watered',
        'Coconut without water': 'coconut-without-water',
        'Kanku': 'kanku',
        'Gulal': 'gulal',
        'Abel': 'abel',
        'Sakar': 'sakar',
        'Drax': 'drax',
        'Common dry fruits': 'common-dry-fruits',
        'Supari': 'supari',
        'Taj': 'taj',
        'Lavang': 'lavang',
        'Elichi': 'elichi',
        'Nadachadi thread': 'nadachadi-thread',
        'Agarbatti': 'agarbatti',
        'Topra na vatka': 'topra-na-vatka',
        'Ganpati Idol': 'ganpati-idol',  # Fixed: capital I
        'Bajot': 'bajot',
        'Patla': 'patla',
        'Kel na pan': 'kel-na-pan',
        'Tulsi na pan': 'tulsi-na-pan',
        'Aasopalav na Pan': 'aasopalav-na-pan',
        'Nagarvel na pan': 'nagarvel-na-pan',
        'Gud': 'gud',
        'Panchamrit': 'panchamrit',
        'Chhuta Phool': 'chhuta-phool',
        'Phool Har': 'phool-har',
        'Kagaj na Duna': 'kagaj-na-duna',
        'Ghau': 'ghau',
        'Chokha': 'chokha',
        'Mindhol': 'mindhol',
        'Chali': 'chali',
        'Manik Stambh': 'manik-stambh',
        'Pipal na pan': 'pipal-na-pan',
        'Pakka fal': 'pakka-fal',
        'Mag': 'mag',
        'Sutli thread for toran': 'sutli-thread',
        'Small clay Divda / Kodiya': 'clay-divda',
        'Utensil aluminium thali': 'aluminium-thali',
        'Vatka': 'vatka',
        'Rakabi': 'rakabi',
        'Lamp': 'lamp-divo',
        'Ghee ': 'ghee-liquid',  # Fixed: trailing space
        'Ghee cotton': 'ghee-cotton',
        'Machis': 'machis',
        'Dhana': 'dhana',
        'Guggul': 'guggul',
        'Cow mud': 'cow-mud',
        'Sthapan clothing_other colour': 'sthapan-clothing-other',  # Fixed: underscore
        'Sthapan clothing_Red': 'sthapan-clothing-red',  # Fixed: underscore
        'Sthapan clothing_Black': 'sthapan-clothing-black',  # Fixed: underscore
        'Sthapan clothing_Green': 'sthapan-clothing-green',  # Fixed: underscore
        'Sthapan clothing_Yellow': 'sthapan-clothing-yellow',  # Fixed: underscore
        'Sthapan clothing_White': 'sthapan-clothing-white',  # Fixed: underscore
        'Udad': 'udad',
        'Chanadal': 'chanadal',
        'Juvar': 'juvar',
        'Chandan powder': 'chandan-powder',
        'Pittal utensils_other': 'pittal-utensils-other',  # Fixed: underscore
        'Pittal utensils_Dish': 'pittal-utensils-dish',  # Fixed: underscore
        'Pittal utensils_Lota': 'pittal-utensils-lota',  # Fixed: underscore
        'Pittal utensils_Glass': 'pittal-utensils-glass',  # Fixed: underscore
        'Pittal utensils_Dabbo': 'pittal-utensils-dabbo',  # Fixed: underscore
        'Tramba kumbh': 'tramba-kumbh',
        'Clay kumbh': 'clay-kumbh',
        'Dhoti': 'dhoti',
        'Jabbha nu kapad': 'jabbha-nu-kapad',
        'Sari': 'sari',
        'Chanio': 'chanio',
        'Blouse piece': 'blouse-piece',
        'Godadu': 'godadu',
        'Oshiku': 'oshiku',
        'Ochad': 'ochhad',  # Fixed: spelling
        'Chatri': 'chatri',
        'Chappal': 'chappal',
        'Vas ni chhabdi': 'vas-ni-chhabdi',
        'Chandla packet': 'chandla-packet',
        'Bangdi': 'bangdi',
        'Ariso': 'ariso',
        'Comb': 'comb',
        'Oil bottle': 'oil-bottle',
        'Kajal': 'kajal',
        'Sent': 'sent',
        'Kang': 'kang',
        'Til': 'til',
        'Jaar': 'jaar',
        'Moti': 'moti',
        'Sutar thread ni dadi': 'sutar-thread-ni-dadi',
        'Kali drax': 'kali-drax',
        'Darbh leaves': 'darbh-leaves',
        'Honey': 'honey',  # Added: new item
        'Jav': 'jav',
        'Kamod': 'kamod',
        'Black til': 'black-til',
        'Jav flour': 'jav-flour',
        'Udad flour': 'udad-flour',
        'Kala til powder': 'kala-til-powder',
        'Black clay matki': 'black-clay-matki',
        'Vas ni sundli': 'vas-ni-sundli',
        'Wood for yagna': 'wood-for-yagna',
        'Janoi': 'janoi',
        'Pako Siddho': 'pako-siddho',
        'Towel': 'towel',
        'Napkin': 'napkin',
        'Male Shirt and Pant Kapad Piece': 'male-shirt-pant-kapad',  # Fixed: added "Piece"
        'Water': 'water',
        'Silver turtle': 'silver-turtle',
        'Silver snake': 'silver-snake',
        'Tambani Tabudi': 'tambani-tabudi',
        'Char chock ni mati': 'char-chock-ni-mati',
        'Silver coin': 'silver-coin',  # Fixed: lowercase
        'Aasan': 'aasan',
        'Chamachi': 'chamachi',
        'Kalash tramba': 'kalash-tramba',
        'Chundi': 'chundi',
        'Rumal': 'rumal',
        'Face powder': 'face-powder',
        'Nail police': 'nail-polish',  # Fixed: police -> polish
        'Kapoor': 'kapoor',
        'Kamalkakdi': 'kamalkakdi',
        'Ral no dhup': 'ral-no-dhup',
        'Dry coconut powder': 'dry-coconut-powder',
        'Sugandhi valo': 'sugandhi-valo',
        'Tamal patra': 'tamal-patra',
        'Dabhdo grass': 'dabhdo-grass',
        'Cow urine': 'cow-urine',
        'Chana': 'chana',
        'Savliyu': 'savliyu',
        'Trambano trass': 'trambano-trass',
        'Kanthi/Mala': 'kanthi-mala',
        'Gaumukhi': 'gaumukhi',
        'Dhramraja silver image foil': 'dhramraja-silver-image',  # Fixed: lowercase
        'Cow silver image foil': 'cow-silver-image',  # Fixed: lowercase
        'Swastik silver': 'swastik-silver',
        'Nisarani silver': 'nisarani-silver',
        'Ship silver': 'ship-silver',
        'Janoi silver': 'janoi-silver'
    }

    def pooja_name_to_id(name):
        """Convert pooja name to kebab case ID"""
        return re.sub(r'[^a-z0-9-]', '', re.sub(r'[/\s]+', '-', name.lower())).strip('-')

    def generate_pooja_items(pooja_name, df):
        """Generate createPoojaItem calls for a specific pooja"""
        items = []
        unmapped_items = []
        
        for _, row in df.iterrows():
            item_name = row['Item name']
            quantity = row[pooja_name]
            
            # Skip null, empty, or zero quantities
            if pd.isna(quantity) or quantity == '' or quantity == 0:
                continue
                
            # Get the item ID from mapping
            item_id = item_name_to_id.get(item_name)
            if not item_id:
                unmapped_items.append(item_name)
                continue
                
            # Convert quantity to int if it's a float
            if isinstance(quantity, float):
                quantity = float(quantity)
                
            items.append(f"    createPoojaItem('{item_id}', {quantity}),")
        
        return items, unmapped_items

    # Get all pooja columns (excluding Item name and Item name(GUJARATI))
    pooja_columns = [col for col in df.columns if col not in ['Item name', 'Item name(GUJARATI)']]
    
    print(f"🔄 Processing {len(pooja_columns)} poojas...")
    
    # Generate TypeScript output
    ts_output = []
    ts_output.append("// Pooja Items Configuration")
    ts_output.append("// Generated from CSV data")
    ts_output.append(f"// Generated on: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    ts_output.append(f"// Total poojas: {len(pooja_columns)}")
    print(pooja_columns)
    ts_output.append("")
    ts_output.append("export const POOJA_CONFIGURATIONS = {")
    
    all_unmapped_items = set()
    pooja_stats = []
    
    # Generate output for all poojas
    for i, pooja_name in enumerate(pooja_columns):
        pooja_id = pooja_name_to_id(pooja_name)
        items, unmapped_items = generate_pooja_items(pooja_name, df)
        
        all_unmapped_items.update(unmapped_items)
        pooja_stats.append({
            'name': pooja_name,
            'id': pooja_id,
            'item_count': len(items),
            'unmapped_count': len(unmapped_items)
        })
        
        # Add to TypeScript output
        ts_output.append(f"  '{pooja_id}': [")
        if items:
            ts_output.extend(items)
        ts_output.append("  ]" + ("," if i < len(pooja_columns) - 1 else ""))
        ts_output.append("")
    
    ts_output.append("};")
    ts_output.append("")
    ts_output.append(f"// Total poojas processed: {len(pooja_columns)}")
    ts_output.append("// Pooja IDs generated:")
    for stat in pooja_stats:
        ts_output.append(f"// - {stat['name']} -> {stat['id']} ({stat['item_count']} items)")
    
    # Write TypeScript file
    try:
        with open('pooja_items_config.ts', 'w', encoding='utf-8') as f:
            f.write('\n'.join(ts_output))
        print("✅ Created: pooja_items_config.ts")
    except Exception as e:
        print(f"❌ Error writing TypeScript file: {e}")
        return
    
    # Generate unmapped items report
    unmapped_content = []
    unmapped_content.append("Items with no ID mapping found:")
    unmapped_content.append("=" * 40)
    unmapped_content.append("")
    
    if all_unmapped_items:
        unmapped_content.append(f"❌ Found {len(all_unmapped_items)} unmapped items:")
        unmapped_content.append("")
        for i, item in enumerate(sorted(all_unmapped_items), 1):
            unmapped_content.append(f"{i}. {item}")
        unmapped_content.append("")
        unmapped_content.append("ACTION REQUIRED:")
        unmapped_content.append("Please add these items to the item_name_to_id mapping in the script.")
    else:
        unmapped_content.append("✅ SUCCESS: No unmapped items found!")
        unmapped_content.append("")
        unmapped_content.append("All items have been successfully mapped to their IDs.")
        unmapped_content.append("")
        unmapped_content.append("Summary:")
        unmapped_content.append(f"- Total items processed: {len(item_name_to_id)} unique items")
        unmapped_content.append(f"- Successfully mapped: {len(item_name_to_id)} items")
        unmapped_content.append(f"- Unmapped items: {len(all_unmapped_items)} items")
        unmapped_content.append(f"- Success rate: 100%")
    
    # Write unmapped items file
    try:
        with open('unmapped_items.txt', 'w', encoding='utf-8') as f:
            f.write('\n'.join(unmapped_content))
        print("✅ Created: unmapped_items.txt")
    except Exception as e:
        print(f"❌ Error writing unmapped items file: {e}")
        return
    
    # Generate summary report
    summary_content = []
    summary_content.append("# Pooja Items Generation Summary")
    summary_content.append("")
    summary_content.append(f"**Generated on:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    summary_content.append("")
    summary_content.append("## Overview")
    summary_content.append(f"- **Total Poojas**: {len(pooja_columns)}")
    summary_content.append(f"- **Total Items**: {len(item_name_to_id)} unique items")
    summary_content.append(f"- **Success Rate**: {100 if len(all_unmapped_items) == 0 else round((len(item_name_to_id) - len(all_unmapped_items)) / len(item_name_to_id) * 100, 2)}%")
    summary_content.append(f"- **Unmapped Items**: {len(all_unmapped_items)}")
    summary_content.append("")
    summary_content.append("## Pooja Statistics")
    summary_content.append("")
    summary_content.append("| # | Pooja Name | Pooja ID | Items |")
    summary_content.append("|---|------------|----------|-------|")
    
    for i, stat in enumerate(pooja_stats, 1):
        summary_content.append(f"| {i} | {stat['name']} | `{stat['id']}` | {stat['item_count']} |")
    
    summary_content.append("")
    summary_content.append("## Files Generated")
    summary_content.append("1. `pooja_items_config.ts` - TypeScript configuration")
    summary_content.append("2. `unmapped_items.txt` - Unmapped items report")
    summary_content.append("3. `summary_report.md` - This summary")
    
    # Write summary report
    try:
        with open('summary_report.md', 'w', encoding='utf-8') as f:
            f.write('\n'.join(summary_content))
        print("✅ Created: summary_report.md")
    except Exception as e:
        print(f"❌ Error writing summary report: {e}")
        return
    
    # Print final results
    print("\n" + "="*60)
    print("📋 GENERATION COMPLETE!")
    print("="*60)
    print(f"✅ Total poojas processed: {len(pooja_columns)}")
    print(f"✅ Total items mapped: {len(item_name_to_id)}")
    print(f"✅ Unmapped items: {len(all_unmapped_items)}")
    
    if len(all_unmapped_items) == 0:
        print("🎉 SUCCESS: All items successfully mapped!")
        print("🚀 All files ready for integration!")
    else:
        print("⚠️  Some items need mapping - check unmapped_items.txt")
    
    print("\n📁 Files created:")
    print("  • pooja_items_config.ts")
    print("  • unmapped_items.txt")
    print("  • summary_report.md")
    
    # Show sample output
    print("\n📄 Sample TypeScript output:")
    print("-" * 40)
    sample_lines = '\n'.join(ts_output[:15])
    print(sample_lines + "\n    // ... (truncated)")
    
    print("\n🎯 Ready to integrate into your application!")

if __name__ == "__main__":
    main()