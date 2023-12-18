<style>
    .fa-spinner{
        animation: spin 3s linear infinite;
        font-size: 1000%;
    }
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    .Loading-container{
        margin-top: 10%;
    }
</style>
<div class="Loading">
    <div class="Loading-container">
        <i class="fa-solid fa-spinner"></i>
    </div>
</div>