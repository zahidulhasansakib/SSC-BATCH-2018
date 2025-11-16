<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your School - SSC Batch 2018</title>
  <link rel="stylesheet" href="style.css">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-b from-blue-50 to-indigo-100 text-gray-800 font-sans">

  <!-- Header -->
  <header class="hero h-[150px] justify-center text-center">
    <div class="container mx-auto px-4 text-center">
      <h1 class="text-4xl md:text-5xl text-white font-bold drop-shadow-md tracking-wide">🏫 Perpeti High School</h1>
      <p class="text-lg md:text-2xl mt-2 text-white font-medium">✨ SSC Batch - 2018 ✨</p>
    </div>
  </header>

  <!-- Banner -->
  <section class="relative">
    <img src="cover.jpg" alt="Batch Group Photo" class="w-full h-100 md:h-96 object-cover">
    <div class="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 flex items-center justify-center">
      <h2 class="text-white text-2xl md:text-4xl font-bold tracking-wider drop-shadow-lg">“Together We Shine – Batch 2018”</h2>
    </div>
  </section>

  <!-- Main Layout -->
  <div class="flex flex-col md:flex-row container mx-auto px-4 py-10 gap-8">

    <!-- Sidebar / Navbar -->
    <aside class="w-full md:w-1/4 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-5 border border-indigo-100">
      <h3 class="text-xl font-semibold mb-4 border-b pb-2 text-indigo-700">Navigation</h3>
      <ul class="space-y-2">
        <li><a href="#" class="block px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium shadow-md hover:shadow-lg transition">🏠 Home</a></li>
        <li><a href="#" class="block px-4 py-2 rounded-xl hover:bg-indigo-100 text-indigo-700 font-medium">👩‍🎓 Students</a></li>
        <li><a href="#" class="block px-4 py-2 rounded-xl hover:bg-indigo-100 text-indigo-700 font-medium">👨‍🏫 Teachers</a></li>
        <li><a href="#" class="block px-4 py-2 rounded-xl hover:bg-indigo-100 text-indigo-700 font-medium">🏫 School Photos</a></li>
        <li><a href="#" class="block px-4 py-2 rounded-xl hover:bg-indigo-100 text-indigo-700 font-medium">🚌 Tour Photos</a></li>
        <li><a href="photo.html" class="block px-4 py-2 rounded-xl hover:bg-indigo-100 text-indigo-700 font-medium">🎉 Gallery</a></li>
        <li><a href="#" class="block px-4 py-2 rounded-xl hover:bg-indigo-100 text-indigo-700 font-medium">⚽ Argentina vs Brazil</a></li>
        <li><a href="#" class="block px-4 py-2 rounded-xl hover:bg-indigo-100 text-indigo-700 font-medium">📚 Academic Info</a></li>
        <li><a href="#" class="block px-4 py-2 rounded-xl hover:bg-indigo-100 text-indigo-700 font-medium">📞 Contact</a></li>
      </ul>
    </aside>

    <!-- Main Content -->
    <main class="flex-1">
      <h2 class="text-3xl font-extrabold mb-6 bg-gradient-to-r from-indigo-700 to-purple-600 bg-clip-text text-transparent">Our Batch Members</h2>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <!-- Example Card -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition transform">
          <img src="00.jpg" alt="Student 1" class="w-full h-60 object-cover">
          <div class="p-5">
            <h3 class="text-xl font-bold text-indigo-700">Md.Zahidul Hasan Sakib</h3>
            <p class="text-sm text-gray-800 font-semibold mt-1">Marital Status: Single</p>
            <button class="mt-4 w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 rounded-xl font-semibold shadow-md hover:from-indigo-600 hover:to-purple-600 transition">View Info</button>
          </div>
        </div>

        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition transform">
          <img src="6.jpg" alt="Student 2" class="w-full h-60 object-cover">
          <div class="p-5">
            <h3 class="text-xl font-bold text-indigo-700">Tanjir Khandokar</h3>
            <p class="text-sm font-semibold text-gray-800  mt-1">Marital Status: Married</p>
            <button class="mt-4 w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 rounded-xl font-semibold shadow-md hover:from-indigo-600 hover:to-purple-600 transition">View Info</button>
          </div>
        </div>

        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition transform">
          <img src="7.jpg" alt="Student 3" class="w-full h-60 object-cover">
          <div class="p-5">
            <h3 class="text-xl font-bold text-indigo-700">Ayman Afridi Shawon</h3>
            <p class="text-sm text-gray-800 font-semibold mt-1">Marital Status: Married</p>
            <button class="mt-4 w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 rounded-xl font-semibold shadow-md hover:from-indigo-600 hover:to-purple-600 transition">View Info</button>
          </div>
        </div>

        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition transform">
          <img src="4.jpg" alt="Student 4" class="w-full h-60 object-cover">
          <div class="p-5">
            <h3 class="text-xl font-bold text-indigo-700">Kazi Shahariya Shawon</h3>
            <p class="text-sm text-gray-800 font-semibold mt-1">Marital Status: Single</p>
            <button class="mt-4 w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 rounded-xl font-semibold shadow-md hover:from-indigo-600 hover:to-purple-600 transition">View Info</button>
          </div>
        </div>

        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition transform">
          <img src="2jpg.jpg" alt="Student 5" class="w-full h-60 object-cover">
          <div class="p-5">
            <h3 class="text-xl font-bold text-indigo-700">Ahan Srabon</h3>
            <p class="text-sm text-gray-800 font-semibold mt-1">Marital Status: Single</p>
            <button class="mt-4 w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 rounded-xl font-semibold shadow-md hover:from-indigo-600 hover:to-purple-600 transition">View Info</button>
          </div>
        </div>

        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition transform">
          <img src="10.jpg" alt="Student 6" class="w-full h-60 object-cover">
          <div class="p-5">
            <h3 class="text-xl font-bold text-indigo-700">Jabed Hossin</h3>
            <p class="text-sm text-gray-800 font-semibold mt-1">Marital Status:Single</p>
            <button class="mt-4 w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 rounded-xl font-semibold shadow-md hover:from-indigo-600 hover:to-purple-600 transition">View Info</button>
          </div>
        </div>

        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition transform">
          <img src="3.jpg" alt="Student 7" class="w-full h-60 object-cover">
          <div class="p-5">
            <h3 class="text-xl font-bold text-indigo-700">Mehedi Minmoy</h3>
            <p class="text-sm text-gray-800 font-semibold mt-1">Marital Status: Single</p>
            <button class="mt-4 w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 rounded-xl font-semibold shadow-md hover:from-indigo-600 hover:to-purple-600 transition">View Info</button>
          </div>
        </div>

        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition transform">
          <img src="8.jpg" alt="Student 8" class="w-full h-60 object-cover">
          <div class="p-5">
            <h3 class="text-xl font-bold text-indigo-700">Adnan Sani</h3>
            <p class="text-sm text-gray-800 font-semibold mt-1">Marital Status: Single</p>
            <button class="mt-4 w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 rounded-xl font-semibold shadow-md hover:from-indigo-600 hover:to-purple-600 transition">View Info</button>
          </div>
        </div>

        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition transform">
          <img src="9.jpg" alt="Student 9" class="w-full h-60 object-cover">
          <div class="p-5">
            <h3 class="text-xl font-bold text-indigo-700">Shaporan Hossain</h3>
            <p class="text-sm text-gray-800 font-semibold mt-1">Marital Status:Married</p>
            <button class="mt-4 w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 rounded-xl font-semibold shadow-md hover:from-indigo-600 hover:to-purple-600 transition">View Info</button>
          </div>
        </div>
      </div>

      <!-- See All Button -->
      <div class="text-center mt-10">
        <button class="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold px-8 py-3 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition">
          🌟 See All (30 Members)
        </button>
      </div>
    </main>
  </div>

  <!-- Footer -->
  <footer class="footer text-white text-center py-5 mt-12 shadow-inner">
    <p class="text-sm md:text-base">© 2025 Perpeti High School SSC Batch 2018 | Designed with ❤️ by Sakib & Batch Members</p>
  </footer>

</body>
</html>
