import os
import rawpy
from PIL import Image

folder_path = r"C:\Users\RAMEEZ\OneDrive\Desktop\kalamaya events\photos fulll set\soti"
max_size = 9.8 * 1024 * 1024

for filename in os.listdir(folder_path):
    if filename.lower().endswith(".arw"):
        file_path = os.path.join(folder_path, filename)
        print(f"[PROCESSING] {file_path}")
        
        try:
            with rawpy.imread(file_path) as raw:
                # Use half_size=True to speed up decoding and reduce output size, it will still be plenty large enough
                rgb = raw.postprocess(half_size=True)
            
            img = Image.fromarray(rgb)
            
            # Save as JPG
            output_filename = filename[:-4] + ".jpg"
            output_path = os.path.join(folder_path, output_filename)
            
            img.save(output_path, "JPEG", quality=85, optimize=True)
            
            # Check size, if > 9.8MB, compress more
            if os.path.getsize(output_path) > max_size:
                print(f"[WARNING] Size is {os.path.getsize(output_path) / 1024 / 1024:.2f}MB, compressing further...")
                img.save(output_path, "JPEG", quality=70, optimize=True)
                
            print(f"[SUCCESS] Saved to {output_path} ({os.path.getsize(output_path) / 1024 / 1024:.2f}MB)")
            
            # Delete original ARW file after successful conversion
            os.remove(file_path)
            
        except Exception as e:
            print(f"[ERROR] Failed processing {file_path}: {e}")
