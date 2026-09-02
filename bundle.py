import os

proj_dir = r"C:\Users\Atta Muhammad\.gemini\antigravity\scratch\multan-commercial-complex"

js_files = [
    "js/data.js",
    "js/components/Icons.js",
    "js/components/Navbar.js",
    "js/components/Hero.js",
    "js/components/About.js",
    "js/components/Offerings.js",
    "js/components/Gallery.js",
    "js/components/Contact.js",
    "js/components/Modals.js",
    "js/app.js"
]

combined_js = []
for rel_path in js_files:
    full_path = os.path.join(proj_dir, rel_path.replace("/", os.sep))
    if os.path.exists(full_path):
        with open(full_path, "r", encoding="utf-8") as f:
            combined_js.append(f"// --- {rel_path} ---\n" + f.read())

bundle_code = "\n\n".join(combined_js)

html_template = """<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Multan Commercial Complex (MCC) | Modern Commercial Excellence</title>
  <meta name="description" content="Multan Commercial Complex (MCC) - MDA Approved Triple Story Commercial Units, Corporate Halls and High-Street Retail Shops on Chungi No. 6, Bosan Road, Multan." />
  
  <!-- Favicon -->
  <link rel="icon" type="image/jpeg" href="images/mcc_logo_dark.jpg" />

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand: {
              gold: '#D4AF37',
              'gold-light': '#F3E5AB',
              'gold-dark': '#AA820A',
              navy: '#080D1A',
              'navy-surface': '#0E1726',
              'navy-card': '#152238',
              blue: '#2563EB',
            }
          },
          fontFamily: {
            sans: ['Plus Jakarta Sans', 'sans-serif'],
            display: ['Outfit', 'sans-serif'],
            luxury: ['Cinzel', 'serif']
          }
        }
      }
    }
  </script>

  <!-- Lucide Icons -->
  <script src="https://unpkg.com/lucide@latest"></script>
  
  <!-- React 18 & Babel Standalone CDN -->
  <script src="https://unpkg.com/react@18/umd/react.production.min.js" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/@babel/standalone@7.24.0/babel.min.js" crossorigin="anonymous"></script>

  <!-- Custom Stylesheet -->
  <link rel="stylesheet" href="css/styles.css" />
</head>
<body class="bg-[#080D1A] text-slate-100 antialiased selection:bg-amber-500 selection:text-black">
  <div id="root"></div>

  <!-- Inline Babel Script (Runs instantly upon double-click with 0 CORS issues) -->
  <script type="text/babel" data-presets="react,env">
""" + bundle_code + """
  </script>
</body>
</html>"""

with open(os.path.join(proj_dir, "index.html"), "w", encoding="utf-8") as f:
    f.write(html_template)

print("Successfully created standalone bundled index.html!")