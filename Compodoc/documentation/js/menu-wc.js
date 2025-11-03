'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">taller-4 documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                                <li class="link">
                                    <a href="index.html" data-type="chapter-link">
                                        <span class="icon ion-ios-keypad"></span>Overview
                                    </a>
                                </li>

                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>

                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-2dadeecb95236c78fa3c88f3e34633a141b09036d9fd167ee24f9de235c7136b3b19654c54c8fac08a4cf30890fc6f633492354708b5da7d2bd152d5d5ab87ad"' : 'data-bs-target="#xs-controllers-links-module-AppModule-2dadeecb95236c78fa3c88f3e34633a141b09036d9fd167ee24f9de235c7136b3b19654c54c8fac08a4cf30890fc6f633492354708b5da7d2bd152d5d5ab87ad"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-2dadeecb95236c78fa3c88f3e34633a141b09036d9fd167ee24f9de235c7136b3b19654c54c8fac08a4cf30890fc6f633492354708b5da7d2bd152d5d5ab87ad"' :
                                            'id="xs-controllers-links-module-AppModule-2dadeecb95236c78fa3c88f3e34633a141b09036d9fd167ee24f9de235c7136b3b19654c54c8fac08a4cf30890fc6f633492354708b5da7d2bd152d5d5ab87ad"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-2dadeecb95236c78fa3c88f3e34633a141b09036d9fd167ee24f9de235c7136b3b19654c54c8fac08a4cf30890fc6f633492354708b5da7d2bd152d5d5ab87ad"' : 'data-bs-target="#xs-injectables-links-module-AppModule-2dadeecb95236c78fa3c88f3e34633a141b09036d9fd167ee24f9de235c7136b3b19654c54c8fac08a4cf30890fc6f633492354708b5da7d2bd152d5d5ab87ad"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-2dadeecb95236c78fa3c88f3e34633a141b09036d9fd167ee24f9de235c7136b3b19654c54c8fac08a4cf30890fc6f633492354708b5da7d2bd152d5d5ab87ad"' :
                                        'id="xs-injectables-links-module-AppModule-2dadeecb95236c78fa3c88f3e34633a141b09036d9fd167ee24f9de235c7136b3b19654c54c8fac08a4cf30890fc6f633492354708b5da7d2bd152d5d5ab87ad"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-c4453c759e87f136a5980de1e9dbff67f5757cce8d4347471ff01b046d2b838d29a5a80eac8f5143bdc4b16a67b45799b0d4312de6347300adfe230fe92aa2c0"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-c4453c759e87f136a5980de1e9dbff67f5757cce8d4347471ff01b046d2b838d29a5a80eac8f5143bdc4b16a67b45799b0d4312de6347300adfe230fe92aa2c0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-c4453c759e87f136a5980de1e9dbff67f5757cce8d4347471ff01b046d2b838d29a5a80eac8f5143bdc4b16a67b45799b0d4312de6347300adfe230fe92aa2c0"' :
                                            'id="xs-controllers-links-module-AuthModule-c4453c759e87f136a5980de1e9dbff67f5757cce8d4347471ff01b046d2b838d29a5a80eac8f5143bdc4b16a67b45799b0d4312de6347300adfe230fe92aa2c0"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-c4453c759e87f136a5980de1e9dbff67f5757cce8d4347471ff01b046d2b838d29a5a80eac8f5143bdc4b16a67b45799b0d4312de6347300adfe230fe92aa2c0"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-c4453c759e87f136a5980de1e9dbff67f5757cce8d4347471ff01b046d2b838d29a5a80eac8f5143bdc4b16a67b45799b0d4312de6347300adfe230fe92aa2c0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-c4453c759e87f136a5980de1e9dbff67f5757cce8d4347471ff01b046d2b838d29a5a80eac8f5143bdc4b16a67b45799b0d4312de6347300adfe230fe92aa2c0"' :
                                        'id="xs-injectables-links-module-AuthModule-c4453c759e87f136a5980de1e9dbff67f5757cce8d4347471ff01b046d2b838d29a5a80eac8f5143bdc4b16a67b45799b0d4312de6347300adfe230fe92aa2c0"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoriaModule.html" data-type="entity-link" >CategoriaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CategoriaModule-95ca480b5d4ad1910be7ad1979d76be80e7cd3630ac210d395cd9bdc4480d48a9ddfd37da8a936f1522e61f5a46f7c1eec8cdf114ad08e72c92c1527819605b5"' : 'data-bs-target="#xs-controllers-links-module-CategoriaModule-95ca480b5d4ad1910be7ad1979d76be80e7cd3630ac210d395cd9bdc4480d48a9ddfd37da8a936f1522e61f5a46f7c1eec8cdf114ad08e72c92c1527819605b5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CategoriaModule-95ca480b5d4ad1910be7ad1979d76be80e7cd3630ac210d395cd9bdc4480d48a9ddfd37da8a936f1522e61f5a46f7c1eec8cdf114ad08e72c92c1527819605b5"' :
                                            'id="xs-controllers-links-module-CategoriaModule-95ca480b5d4ad1910be7ad1979d76be80e7cd3630ac210d395cd9bdc4480d48a9ddfd37da8a936f1522e61f5a46f7c1eec8cdf114ad08e72c92c1527819605b5"' }>
                                            <li class="link">
                                                <a href="controllers/CategoriaController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoriaController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CategoriaModule-95ca480b5d4ad1910be7ad1979d76be80e7cd3630ac210d395cd9bdc4480d48a9ddfd37da8a936f1522e61f5a46f7c1eec8cdf114ad08e72c92c1527819605b5"' : 'data-bs-target="#xs-injectables-links-module-CategoriaModule-95ca480b5d4ad1910be7ad1979d76be80e7cd3630ac210d395cd9bdc4480d48a9ddfd37da8a936f1522e61f5a46f7c1eec8cdf114ad08e72c92c1527819605b5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CategoriaModule-95ca480b5d4ad1910be7ad1979d76be80e7cd3630ac210d395cd9bdc4480d48a9ddfd37da8a936f1522e61f5a46f7c1eec8cdf114ad08e72c92c1527819605b5"' :
                                        'id="xs-injectables-links-module-CategoriaModule-95ca480b5d4ad1910be7ad1979d76be80e7cd3630ac210d395cd9bdc4480d48a9ddfd37da8a936f1522e61f5a46f7c1eec8cdf114ad08e72c92c1527819605b5"' }>
                                        <li class="link">
                                            <a href="injectables/CategoriaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoriaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FacturacionModule.html" data-type="entity-link" >FacturacionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-FacturacionModule-4186b43f7e1f6ce29dedbed3b36968c3a752961d8f60ed242479caa88a58c718f639b98fc95a39d0a375cb452893269657ecdd423642b8042824b1177119c616"' : 'data-bs-target="#xs-controllers-links-module-FacturacionModule-4186b43f7e1f6ce29dedbed3b36968c3a752961d8f60ed242479caa88a58c718f639b98fc95a39d0a375cb452893269657ecdd423642b8042824b1177119c616"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FacturacionModule-4186b43f7e1f6ce29dedbed3b36968c3a752961d8f60ed242479caa88a58c718f639b98fc95a39d0a375cb452893269657ecdd423642b8042824b1177119c616"' :
                                            'id="xs-controllers-links-module-FacturacionModule-4186b43f7e1f6ce29dedbed3b36968c3a752961d8f60ed242479caa88a58c718f639b98fc95a39d0a375cb452893269657ecdd423642b8042824b1177119c616"' }>
                                            <li class="link">
                                                <a href="controllers/FacturacionController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FacturacionController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FacturacionModule-4186b43f7e1f6ce29dedbed3b36968c3a752961d8f60ed242479caa88a58c718f639b98fc95a39d0a375cb452893269657ecdd423642b8042824b1177119c616"' : 'data-bs-target="#xs-injectables-links-module-FacturacionModule-4186b43f7e1f6ce29dedbed3b36968c3a752961d8f60ed242479caa88a58c718f639b98fc95a39d0a375cb452893269657ecdd423642b8042824b1177119c616"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FacturacionModule-4186b43f7e1f6ce29dedbed3b36968c3a752961d8f60ed242479caa88a58c718f639b98fc95a39d0a375cb452893269657ecdd423642b8042824b1177119c616"' :
                                        'id="xs-injectables-links-module-FacturacionModule-4186b43f7e1f6ce29dedbed3b36968c3a752961d8f60ed242479caa88a58c718f639b98fc95a39d0a375cb452893269657ecdd423642b8042824b1177119c616"' }>
                                        <li class="link">
                                            <a href="injectables/FacturacionRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FacturacionRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FacturacionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FacturacionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductoModule.html" data-type="entity-link" >ProductoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ProductoModule-2986c12c6d6e93782f73a86f3bcfdc518e3da6a715b61f6ea5c22a2fcb6ac74918ddda99f99a33e390bd2c956326c01b615124b7c46559ba3a72a158f2d7b6d2"' : 'data-bs-target="#xs-controllers-links-module-ProductoModule-2986c12c6d6e93782f73a86f3bcfdc518e3da6a715b61f6ea5c22a2fcb6ac74918ddda99f99a33e390bd2c956326c01b615124b7c46559ba3a72a158f2d7b6d2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductoModule-2986c12c6d6e93782f73a86f3bcfdc518e3da6a715b61f6ea5c22a2fcb6ac74918ddda99f99a33e390bd2c956326c01b615124b7c46559ba3a72a158f2d7b6d2"' :
                                            'id="xs-controllers-links-module-ProductoModule-2986c12c6d6e93782f73a86f3bcfdc518e3da6a715b61f6ea5c22a2fcb6ac74918ddda99f99a33e390bd2c956326c01b615124b7c46559ba3a72a158f2d7b6d2"' }>
                                            <li class="link">
                                                <a href="controllers/ProductoController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductoController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProductoModule-2986c12c6d6e93782f73a86f3bcfdc518e3da6a715b61f6ea5c22a2fcb6ac74918ddda99f99a33e390bd2c956326c01b615124b7c46559ba3a72a158f2d7b6d2"' : 'data-bs-target="#xs-injectables-links-module-ProductoModule-2986c12c6d6e93782f73a86f3bcfdc518e3da6a715b61f6ea5c22a2fcb6ac74918ddda99f99a33e390bd2c956326c01b615124b7c46559ba3a72a158f2d7b6d2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductoModule-2986c12c6d6e93782f73a86f3bcfdc518e3da6a715b61f6ea5c22a2fcb6ac74918ddda99f99a33e390bd2c956326c01b615124b7c46559ba3a72a158f2d7b6d2"' :
                                        'id="xs-injectables-links-module-ProductoModule-2986c12c6d6e93782f73a86f3bcfdc518e3da6a715b61f6ea5c22a2fcb6ac74918ddda99f99a33e390bd2c956326c01b615124b7c46559ba3a72a158f2d7b6d2"' }>
                                        <li class="link">
                                            <a href="injectables/ProductoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductoService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProveedorModule.html" data-type="entity-link" >ProveedorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ProveedorModule-01b79dcd8bf7ff6e36a1700e6efc835b7317a6e2c7bddde74bb3495e85014d6b6b91c7d5cbb835e0235f46279a4eb7ecb3049efaef46d07af14974ed2b4b5aba"' : 'data-bs-target="#xs-controllers-links-module-ProveedorModule-01b79dcd8bf7ff6e36a1700e6efc835b7317a6e2c7bddde74bb3495e85014d6b6b91c7d5cbb835e0235f46279a4eb7ecb3049efaef46d07af14974ed2b4b5aba"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProveedorModule-01b79dcd8bf7ff6e36a1700e6efc835b7317a6e2c7bddde74bb3495e85014d6b6b91c7d5cbb835e0235f46279a4eb7ecb3049efaef46d07af14974ed2b4b5aba"' :
                                            'id="xs-controllers-links-module-ProveedorModule-01b79dcd8bf7ff6e36a1700e6efc835b7317a6e2c7bddde74bb3495e85014d6b6b91c7d5cbb835e0235f46279a4eb7ecb3049efaef46d07af14974ed2b4b5aba"' }>
                                            <li class="link">
                                                <a href="controllers/ProveedorController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProveedorController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProveedorModule-01b79dcd8bf7ff6e36a1700e6efc835b7317a6e2c7bddde74bb3495e85014d6b6b91c7d5cbb835e0235f46279a4eb7ecb3049efaef46d07af14974ed2b4b5aba"' : 'data-bs-target="#xs-injectables-links-module-ProveedorModule-01b79dcd8bf7ff6e36a1700e6efc835b7317a6e2c7bddde74bb3495e85014d6b6b91c7d5cbb835e0235f46279a4eb7ecb3049efaef46d07af14974ed2b4b5aba"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProveedorModule-01b79dcd8bf7ff6e36a1700e6efc835b7317a6e2c7bddde74bb3495e85014d6b6b91c7d5cbb835e0235f46279a4eb7ecb3049efaef46d07af14974ed2b4b5aba"' :
                                        'id="xs-injectables-links-module-ProveedorModule-01b79dcd8bf7ff6e36a1700e6efc835b7317a6e2c7bddde74bb3495e85014d6b6b91c7d5cbb835e0235f46279a4eb7ecb3049efaef46d07af14974ed2b4b5aba"' }>
                                        <li class="link">
                                            <a href="injectables/ProveedorService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProveedorService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsuarioModule.html" data-type="entity-link" >UsuarioModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsuarioModule-881ba0f66b3117592441903531b408cc3aedc87430d65857a0163afdae6e11e0de0cb6eddc9a3352d28dff270d3bbca26fe148e026304f689e654e0c92372eae"' : 'data-bs-target="#xs-controllers-links-module-UsuarioModule-881ba0f66b3117592441903531b408cc3aedc87430d65857a0163afdae6e11e0de0cb6eddc9a3352d28dff270d3bbca26fe148e026304f689e654e0c92372eae"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsuarioModule-881ba0f66b3117592441903531b408cc3aedc87430d65857a0163afdae6e11e0de0cb6eddc9a3352d28dff270d3bbca26fe148e026304f689e654e0c92372eae"' :
                                            'id="xs-controllers-links-module-UsuarioModule-881ba0f66b3117592441903531b408cc3aedc87430d65857a0163afdae6e11e0de0cb6eddc9a3352d28dff270d3bbca26fe148e026304f689e654e0c92372eae"' }>
                                            <li class="link">
                                                <a href="controllers/UsuarioController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsuarioController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsuarioModule-881ba0f66b3117592441903531b408cc3aedc87430d65857a0163afdae6e11e0de0cb6eddc9a3352d28dff270d3bbca26fe148e026304f689e654e0c92372eae"' : 'data-bs-target="#xs-injectables-links-module-UsuarioModule-881ba0f66b3117592441903531b408cc3aedc87430d65857a0163afdae6e11e0de0cb6eddc9a3352d28dff270d3bbca26fe148e026304f689e654e0c92372eae"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsuarioModule-881ba0f66b3117592441903531b408cc3aedc87430d65857a0163afdae6e11e0de0cb6eddc9a3352d28dff270d3bbca26fe148e026304f689e654e0c92372eae"' :
                                        'id="xs-injectables-links-module-UsuarioModule-881ba0f66b3117592441903531b408cc3aedc87430d65857a0163afdae6e11e0de0cb6eddc9a3352d28dff270d3bbca26fe148e026304f689e654e0c92372eae"' }>
                                        <li class="link">
                                            <a href="injectables/FacturacionRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FacturacionRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsuarioRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsuarioRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsuarioService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsuarioService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/VentasRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VentasRepository</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/VentaProductoModule.html" data-type="entity-link" >VentaProductoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-VentaProductoModule-b6d866edc28e217f1be057ab4cc95c416c79878a1d8455b5123f409b79a6806aa2f9efc687c36163773092998f69c3da920b4a95e9dac0303afa5739526f25ff"' : 'data-bs-target="#xs-controllers-links-module-VentaProductoModule-b6d866edc28e217f1be057ab4cc95c416c79878a1d8455b5123f409b79a6806aa2f9efc687c36163773092998f69c3da920b4a95e9dac0303afa5739526f25ff"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-VentaProductoModule-b6d866edc28e217f1be057ab4cc95c416c79878a1d8455b5123f409b79a6806aa2f9efc687c36163773092998f69c3da920b4a95e9dac0303afa5739526f25ff"' :
                                            'id="xs-controllers-links-module-VentaProductoModule-b6d866edc28e217f1be057ab4cc95c416c79878a1d8455b5123f409b79a6806aa2f9efc687c36163773092998f69c3da920b4a95e9dac0303afa5739526f25ff"' }>
                                            <li class="link">
                                                <a href="controllers/VentaProductoController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VentaProductoController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-VentaProductoModule-b6d866edc28e217f1be057ab4cc95c416c79878a1d8455b5123f409b79a6806aa2f9efc687c36163773092998f69c3da920b4a95e9dac0303afa5739526f25ff"' : 'data-bs-target="#xs-injectables-links-module-VentaProductoModule-b6d866edc28e217f1be057ab4cc95c416c79878a1d8455b5123f409b79a6806aa2f9efc687c36163773092998f69c3da920b4a95e9dac0303afa5739526f25ff"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-VentaProductoModule-b6d866edc28e217f1be057ab4cc95c416c79878a1d8455b5123f409b79a6806aa2f9efc687c36163773092998f69c3da920b4a95e9dac0303afa5739526f25ff"' :
                                        'id="xs-injectables-links-module-VentaProductoModule-b6d866edc28e217f1be057ab4cc95c416c79878a1d8455b5123f409b79a6806aa2f9efc687c36163773092998f69c3da920b4a95e9dac0303afa5739526f25ff"' }>
                                        <li class="link">
                                            <a href="injectables/VentaProductoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VentaProductoService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/VentasModule.html" data-type="entity-link" >VentasModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-VentasModule-a2b66f2fd994d05587314c10ecc477c16f0cb0659135a3d9541d35e369af899d219dc4017e8e49d3eec88d90cbf089b0b3bd2727090e043ba23b60949500a303"' : 'data-bs-target="#xs-controllers-links-module-VentasModule-a2b66f2fd994d05587314c10ecc477c16f0cb0659135a3d9541d35e369af899d219dc4017e8e49d3eec88d90cbf089b0b3bd2727090e043ba23b60949500a303"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-VentasModule-a2b66f2fd994d05587314c10ecc477c16f0cb0659135a3d9541d35e369af899d219dc4017e8e49d3eec88d90cbf089b0b3bd2727090e043ba23b60949500a303"' :
                                            'id="xs-controllers-links-module-VentasModule-a2b66f2fd994d05587314c10ecc477c16f0cb0659135a3d9541d35e369af899d219dc4017e8e49d3eec88d90cbf089b0b3bd2727090e043ba23b60949500a303"' }>
                                            <li class="link">
                                                <a href="controllers/VentasController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VentasController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-VentasModule-a2b66f2fd994d05587314c10ecc477c16f0cb0659135a3d9541d35e369af899d219dc4017e8e49d3eec88d90cbf089b0b3bd2727090e043ba23b60949500a303"' : 'data-bs-target="#xs-injectables-links-module-VentasModule-a2b66f2fd994d05587314c10ecc477c16f0cb0659135a3d9541d35e369af899d219dc4017e8e49d3eec88d90cbf089b0b3bd2727090e043ba23b60949500a303"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-VentasModule-a2b66f2fd994d05587314c10ecc477c16f0cb0659135a3d9541d35e369af899d219dc4017e8e49d3eec88d90cbf089b0b3bd2727090e043ba23b60949500a303"' :
                                        'id="xs-injectables-links-module-VentasModule-a2b66f2fd994d05587314c10ecc477c16f0cb0659135a3d9541d35e369af899d219dc4017e8e49d3eec88d90cbf089b0b3bd2727090e043ba23b60949500a303"' }>
                                        <li class="link">
                                            <a href="injectables/VentasRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VentasRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/VentasService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VentasService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CategoriaController.html" data-type="entity-link" >CategoriaController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/FacturacionController.html" data-type="entity-link" >FacturacionController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProductoController.html" data-type="entity-link" >ProductoController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProveedorController.html" data-type="entity-link" >ProveedorController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsuarioController.html" data-type="entity-link" >UsuarioController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/VentaProductoController.html" data-type="entity-link" >VentaProductoController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/VentasController.html" data-type="entity-link" >VentasController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Categoria.html" data-type="entity-link" >Categoria</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Facturacion.html" data-type="entity-link" >Facturacion</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Producto.html" data-type="entity-link" >Producto</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Proveedor.html" data-type="entity-link" >Proveedor</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Usuario.html" data-type="entity-link" >Usuario</a>
                                </li>
                                <li class="link">
                                    <a href="entities/VentaProducto.html" data-type="entity-link" >VentaProducto</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Ventas.html" data-type="entity-link" >Ventas</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateCategoriaDto.html" data-type="entity-link" >CreateCategoriaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateFacturacionDto.html" data-type="entity-link" >CreateFacturacionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProductoDto.html" data-type="entity-link" >CreateProductoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUsuarioDto.html" data-type="entity-link" >CreateUsuarioDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateVentaDto.html" data-type="entity-link" >CreateVentaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterDto.html" data-type="entity-link" >RegisterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCategoriaDto.html" data-type="entity-link" >UpdateCategoriaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateFacturacionDto.html" data-type="entity-link" >UpdateFacturacionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProductoDto.html" data-type="entity-link" >UpdateProductoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUsuarioDto.html" data-type="entity-link" >UpdateUsuarioDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateVentaDto.html" data-type="entity-link" >UpdateVentaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/VentaProducto.html" data-type="entity-link" >VentaProducto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoriaService.html" data-type="entity-link" >CategoriaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FacturacionRepository.html" data-type="entity-link" >FacturacionRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FacturacionService.html" data-type="entity-link" >FacturacionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductoService.html" data-type="entity-link" >ProductoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProveedorService.html" data-type="entity-link" >ProveedorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsuarioRepository.html" data-type="entity-link" >UsuarioRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsuarioService.html" data-type="entity-link" >UsuarioService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VentaProductoService.html" data-type="entity-link" >VentaProductoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VentasRepository.html" data-type="entity-link" >VentasRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VentasService.html" data-type="entity-link" >VentasService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/RolesGuard.html" data-type="entity-link" >RolesGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});