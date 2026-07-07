<?php 
require_once 'config.php';
include 'header.php'; 

$success = false;
$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['fullname'] ?? '';
    $email = $_POST['email'] ?? '';
    $phone = $_POST['phone'] ?? '';
    
    if (empty($name) || empty($email)) {
        $error = "Please fill in all required fields.";
    } else {
        // Mock success for Phase 1 refactor
        $success = true;
    }
}
?>

<div class="py-24 max-w-3xl mx-auto px-4">
    <div class="bg-[#141414] border border-white/10 p-12">
        <h1 class="text-3xl font-serif text-white mb-8">Secure Your Residence</h1>
        
        <?php if ($success): ?>
            <div class="bg-green-500/10 border border-green-500/20 p-6 text-green-500 mb-8">
                Your inquiry has been received. Our team will contact you shortly.
            </div>
        <?php elseif ($error): ?>
            <div class="bg-red-500/10 border border-red-500/20 p-6 text-red-500 mb-8">
                <?php echo $error; ?>
            </div>
        <?php endif; ?>

        <form method="POST" class="space-y-6">
            <div class="form-input-container">
                <label class="form-label">Full Name</label>
                <input type="text" name="fullname" class="form-input" required>
            </div>
            <div class="form-input-container">
                <label class="form-label">Email Address</label>
                <input type="email" name="email" class="form-input" required>
            </div>
            <div class="form-input-container">
                <label class="form-label">Phone Number</label>
                <input type="tel" name="phone" class="form-input">
            </div>
            <button type="submit" class="w-full bg-[#c9a45c] py-4 text-black font-bold uppercase tracking-widest hover:bg-white transition-all">Submit Inquiry</button>
        </form>
    </div>
</div>

<?php include 'footer.php'; ?>