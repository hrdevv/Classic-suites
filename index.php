<?php include 'header.php'; ?>

<section class="relative h-[80vh] flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 bg-[url('https://picsum.photos/id/122/1920/1080')] bg-cover bg-center opacity-40"></div>
    <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent"></div>
    <div class="relative z-10 text-center px-4">
        <span class="text-[#c9a45c] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Abuja's Premier Choice</span>
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">Sophisticated Serviced Living</h1>
        <p class="text-gray-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Experience premium, fully-furnished hospitality solutions designed for the discerning traveler.
        </p>
        <a href="inquiry.php" class="px-12 py-4 bg-[#c9a45c] text-black font-bold tracking-widest uppercase hover:bg-white transition-all">Check Availability</a>
    </div>
</section>

<section class="py-24 max-w-7xl mx-auto px-4">
    <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
            <h2 class="text-4xl font-bold text-white mb-4">Featured Residences</h2>
            <div class="h-1 w-20 bg-[#c9a45c]"></div>
        </div>
        <a href="apartments.php" class="text-[#c9a45c] text-sm font-bold tracking-widest uppercase border-b border-[#c9a45c] pb-1">View Listings</a>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Static placeholders for PHP demo -->
        <div class="apt-card">
            <div class="apt-card__img-wrapper"><img src="https://images.unsplash.com/photo-1566665797739-1674de7a421a" class="apt-card__img"></div>
            <div class="p-6">
                <h3 class="text-xl font-serif font-bold text-white">Wuse II - 2 Bedroom</h3>
                <p class="text-gray-400 text-sm mt-2 mb-6">Italian marble floors and floor-to-ceiling windows.</p>
                <a href="inquiry.php" class="apt-card__btn">Inquire Now</a>
            </div>
        </div>
        <!-- More cards would be fetched from DB via config.php -->
    </div>
</section>

<?php include 'footer.php'; ?>