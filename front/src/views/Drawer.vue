<template>
     <ui-drawer type="dismissible" viewport-height nav-id="drawer-menu">
        <ui-drawer-header>
            <ui-drawer-title>Guillaume Roux</ui-drawer-title>
            <ui-drawer-subtitle>Portfolio</ui-drawer-subtitle>
        </ui-drawer-header>
        <ui-drawer-content>
            <ui-nav>
                <router-link to="/" custom v-slot="{ href, navigate, isActive }"> 
                    <ui-nav-item :class="{ active: isActive }" :href="href" @click="navigate">
                        Accueil
                    </ui-nav-item>
                </router-link>
                <router-link to="/about" custom v-slot="{ href, navigate, isActive }">
                    <ui-nav-item :class="{ active: isActive }" :href="href" @click="navigate">
                        A Propos
                    </ui-nav-item>
                </router-link>
     
            </ui-nav>
        </ui-drawer-content>
    </ui-drawer>
</template>
