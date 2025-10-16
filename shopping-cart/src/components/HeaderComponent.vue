<template>
    <nav class="navbar navbar-expand-lg bg-light shadow-sm">
        <div class="container">
            <a class="navbar-brand d-flex align-items-center" href="#">
                <i class="bi bi-shop fs-3 text-success me-2"></i> MyShop
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <!-- Menu -->
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button"
                            data-bs-toggle="dropdown">Dropdown</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li class="nav-item"><a class="nav-link disabled">Disabled</a></li>
                </ul>

                <!-- Search bar -->
                <form class="d-flex me-3" role="search">
                    <input class="form-control me-2" type="search" placeholder="Tìm sản phẩm...">
                    <button class="btn btn-outline-success" type="submit"><i class="bi bi-search"></i></button>
                </form>

                <!-- Cart button -->
                <button class="btn btn-success">
                    <i class="bi bi-cart-fill"></i> Giỏ hàng
                </button>
            </div>
        </div>
    </nav>
</template>
<script>
export default {

}
</script>
<style lang="">

</style>