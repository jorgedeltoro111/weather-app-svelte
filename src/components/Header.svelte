<script>
    
</script>
<style>
    .navbar-brand{
        display: flex;
        align-items: center;
    }
    h1{
        margin-left: 30px;
        color: white;
    }
    img{
        width: 110px;
        height: 110px;  
    }
    .navbar{
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 1000;
        background: linear-gradient(to right, #000000, #737373);
    }
    form{
        align-items: end;
        margin-right: 15%;
    }
    input{
        border-radius: 10px;
        font-size:x-large;
        padding: 5px;
        border-color: rgb(202, 195, 195);
        border-width: 2px;
    }
    .search-form{
        margin-left: auto; /* Empuja el formulario hacia la derecha */
        display: flex;
        align-items: center;
    }
    .search-input::placeholder{
        color: rgb(142, 136, 142);
    }
    
</style>
<div class="Header">
    <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="https">
            <img src="https://i.pinimg.com/originals/97/ef/55/97ef55ab22265ee822cef6fcdeea9685.jpg" width="30" height="30" class="d-inline-block align-top" alt="">
            <h1>Weather</h1>
        </a>
        <form action="" class="search-form">
            <input type="text" placeholder="🔍︎ Busca tu ciudad" class="search-input">
        </form>
    </nav>
</div>