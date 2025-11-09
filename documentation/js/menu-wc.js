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
                    <a href="index.html" data-type="index-link">taller_4 documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                                <li class="link">
                                    <a href="overview.html" data-type="chapter-link">
                                        <span class="icon ion-ios-keypad"></span>Overview
                                    </a>
                                </li>

                            <li class="link">
                                <a href="index.html" data-type="chapter-link">
                                    <span class="icon ion-ios-paper"></span>
                                        README
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
                                            'data-bs-target="#controllers-links-module-AppModule-fc55e3e36cfb04e12d0d79768e14e4cf57ed9f058c730a4ed8018db12a0b44f991ea6d9a5f3601b2ef0e6faa5be4894ba93591c2784ce811a4f5548cb48e7013"' : 'data-bs-target="#xs-controllers-links-module-AppModule-fc55e3e36cfb04e12d0d79768e14e4cf57ed9f058c730a4ed8018db12a0b44f991ea6d9a5f3601b2ef0e6faa5be4894ba93591c2784ce811a4f5548cb48e7013"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-fc55e3e36cfb04e12d0d79768e14e4cf57ed9f058c730a4ed8018db12a0b44f991ea6d9a5f3601b2ef0e6faa5be4894ba93591c2784ce811a4f5548cb48e7013"' :
                                            'id="xs-controllers-links-module-AppModule-fc55e3e36cfb04e12d0d79768e14e4cf57ed9f058c730a4ed8018db12a0b44f991ea6d9a5f3601b2ef0e6faa5be4894ba93591c2784ce811a4f5548cb48e7013"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-fc55e3e36cfb04e12d0d79768e14e4cf57ed9f058c730a4ed8018db12a0b44f991ea6d9a5f3601b2ef0e6faa5be4894ba93591c2784ce811a4f5548cb48e7013"' : 'data-bs-target="#xs-injectables-links-module-AppModule-fc55e3e36cfb04e12d0d79768e14e4cf57ed9f058c730a4ed8018db12a0b44f991ea6d9a5f3601b2ef0e6faa5be4894ba93591c2784ce811a4f5548cb48e7013"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-fc55e3e36cfb04e12d0d79768e14e4cf57ed9f058c730a4ed8018db12a0b44f991ea6d9a5f3601b2ef0e6faa5be4894ba93591c2784ce811a4f5548cb48e7013"' :
                                        'id="xs-injectables-links-module-AppModule-fc55e3e36cfb04e12d0d79768e14e4cf57ed9f058c730a4ed8018db12a0b44f991ea6d9a5f3601b2ef0e6faa5be4894ba93591c2784ce811a4f5548cb48e7013"' }>
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
                                            'data-bs-target="#controllers-links-module-AuthModule-836f602542929a0ccbffb94603b1aeaf8282271c14179464814cf06a467929d8d72050496420df9534b5686a966cb6560214245b8b02e5fd7d5c81e0159b144c"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-836f602542929a0ccbffb94603b1aeaf8282271c14179464814cf06a467929d8d72050496420df9534b5686a966cb6560214245b8b02e5fd7d5c81e0159b144c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-836f602542929a0ccbffb94603b1aeaf8282271c14179464814cf06a467929d8d72050496420df9534b5686a966cb6560214245b8b02e5fd7d5c81e0159b144c"' :
                                            'id="xs-controllers-links-module-AuthModule-836f602542929a0ccbffb94603b1aeaf8282271c14179464814cf06a467929d8d72050496420df9534b5686a966cb6560214245b8b02e5fd7d5c81e0159b144c"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-836f602542929a0ccbffb94603b1aeaf8282271c14179464814cf06a467929d8d72050496420df9534b5686a966cb6560214245b8b02e5fd7d5c81e0159b144c"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-836f602542929a0ccbffb94603b1aeaf8282271c14179464814cf06a467929d8d72050496420df9534b5686a966cb6560214245b8b02e5fd7d5c81e0159b144c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-836f602542929a0ccbffb94603b1aeaf8282271c14179464814cf06a467929d8d72050496420df9534b5686a966cb6560214245b8b02e5fd7d5c81e0159b144c"' :
                                        'id="xs-injectables-links-module-AuthModule-836f602542929a0ccbffb94603b1aeaf8282271c14179464814cf06a467929d8d72050496420df9534b5686a966cb6560214245b8b02e5fd7d5c81e0159b144c"' }>
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
                                            'data-bs-target="#controllers-links-module-CategoriaModule-595ed643963b27e0367e5b19e7f9ab835d6f697ebb989726ec650d9fe1df913ff02bbd076243a753fe8f4fcd7f2bf0a718ac48f025db45d279d11f5ab3ef15d8"' : 'data-bs-target="#xs-controllers-links-module-CategoriaModule-595ed643963b27e0367e5b19e7f9ab835d6f697ebb989726ec650d9fe1df913ff02bbd076243a753fe8f4fcd7f2bf0a718ac48f025db45d279d11f5ab3ef15d8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CategoriaModule-595ed643963b27e0367e5b19e7f9ab835d6f697ebb989726ec650d9fe1df913ff02bbd076243a753fe8f4fcd7f2bf0a718ac48f025db45d279d11f5ab3ef15d8"' :
                                            'id="xs-controllers-links-module-CategoriaModule-595ed643963b27e0367e5b19e7f9ab835d6f697ebb989726ec650d9fe1df913ff02bbd076243a753fe8f4fcd7f2bf0a718ac48f025db45d279d11f5ab3ef15d8"' }>
                                            <li class="link">
                                                <a href="controllers/CategoriaController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoriaController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CategoriaModule-595ed643963b27e0367e5b19e7f9ab835d6f697ebb989726ec650d9fe1df913ff02bbd076243a753fe8f4fcd7f2bf0a718ac48f025db45d279d11f5ab3ef15d8"' : 'data-bs-target="#xs-injectables-links-module-CategoriaModule-595ed643963b27e0367e5b19e7f9ab835d6f697ebb989726ec650d9fe1df913ff02bbd076243a753fe8f4fcd7f2bf0a718ac48f025db45d279d11f5ab3ef15d8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CategoriaModule-595ed643963b27e0367e5b19e7f9ab835d6f697ebb989726ec650d9fe1df913ff02bbd076243a753fe8f4fcd7f2bf0a718ac48f025db45d279d11f5ab3ef15d8"' :
                                        'id="xs-injectables-links-module-CategoriaModule-595ed643963b27e0367e5b19e7f9ab835d6f697ebb989726ec650d9fe1df913ff02bbd076243a753fe8f4fcd7f2bf0a718ac48f025db45d279d11f5ab3ef15d8"' }>
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
                                            'data-bs-target="#controllers-links-module-FacturacionModule-eb629e6d8e75ae460d564012d65da6f32791901d9f465d3729bc8d736235c1f6b07f2bd28a43e12ff34ea6d47f006a5618c3ec25a657e256c5c739b33bd35971"' : 'data-bs-target="#xs-controllers-links-module-FacturacionModule-eb629e6d8e75ae460d564012d65da6f32791901d9f465d3729bc8d736235c1f6b07f2bd28a43e12ff34ea6d47f006a5618c3ec25a657e256c5c739b33bd35971"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FacturacionModule-eb629e6d8e75ae460d564012d65da6f32791901d9f465d3729bc8d736235c1f6b07f2bd28a43e12ff34ea6d47f006a5618c3ec25a657e256c5c739b33bd35971"' :
                                            'id="xs-controllers-links-module-FacturacionModule-eb629e6d8e75ae460d564012d65da6f32791901d9f465d3729bc8d736235c1f6b07f2bd28a43e12ff34ea6d47f006a5618c3ec25a657e256c5c739b33bd35971"' }>
                                            <li class="link">
                                                <a href="controllers/FacturacionController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FacturacionController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FacturacionModule-eb629e6d8e75ae460d564012d65da6f32791901d9f465d3729bc8d736235c1f6b07f2bd28a43e12ff34ea6d47f006a5618c3ec25a657e256c5c739b33bd35971"' : 'data-bs-target="#xs-injectables-links-module-FacturacionModule-eb629e6d8e75ae460d564012d65da6f32791901d9f465d3729bc8d736235c1f6b07f2bd28a43e12ff34ea6d47f006a5618c3ec25a657e256c5c739b33bd35971"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FacturacionModule-eb629e6d8e75ae460d564012d65da6f32791901d9f465d3729bc8d736235c1f6b07f2bd28a43e12ff34ea6d47f006a5618c3ec25a657e256c5c739b33bd35971"' :
                                        'id="xs-injectables-links-module-FacturacionModule-eb629e6d8e75ae460d564012d65da6f32791901d9f465d3729bc8d736235c1f6b07f2bd28a43e12ff34ea6d47f006a5618c3ec25a657e256c5c739b33bd35971"' }>
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
                                            'data-bs-target="#controllers-links-module-ProductoModule-62273a60b9639bbf908d08a763b9193cc461feac59a978dd7bc2c6655d13b6a94a7b8e6c87ed259d27d74ca902f348be896d7e5cd771e109c1989cc57a5adb19"' : 'data-bs-target="#xs-controllers-links-module-ProductoModule-62273a60b9639bbf908d08a763b9193cc461feac59a978dd7bc2c6655d13b6a94a7b8e6c87ed259d27d74ca902f348be896d7e5cd771e109c1989cc57a5adb19"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductoModule-62273a60b9639bbf908d08a763b9193cc461feac59a978dd7bc2c6655d13b6a94a7b8e6c87ed259d27d74ca902f348be896d7e5cd771e109c1989cc57a5adb19"' :
                                            'id="xs-controllers-links-module-ProductoModule-62273a60b9639bbf908d08a763b9193cc461feac59a978dd7bc2c6655d13b6a94a7b8e6c87ed259d27d74ca902f348be896d7e5cd771e109c1989cc57a5adb19"' }>
                                            <li class="link">
                                                <a href="controllers/ProductoController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductoController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProductoModule-62273a60b9639bbf908d08a763b9193cc461feac59a978dd7bc2c6655d13b6a94a7b8e6c87ed259d27d74ca902f348be896d7e5cd771e109c1989cc57a5adb19"' : 'data-bs-target="#xs-injectables-links-module-ProductoModule-62273a60b9639bbf908d08a763b9193cc461feac59a978dd7bc2c6655d13b6a94a7b8e6c87ed259d27d74ca902f348be896d7e5cd771e109c1989cc57a5adb19"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductoModule-62273a60b9639bbf908d08a763b9193cc461feac59a978dd7bc2c6655d13b6a94a7b8e6c87ed259d27d74ca902f348be896d7e5cd771e109c1989cc57a5adb19"' :
                                        'id="xs-injectables-links-module-ProductoModule-62273a60b9639bbf908d08a763b9193cc461feac59a978dd7bc2c6655d13b6a94a7b8e6c87ed259d27d74ca902f348be896d7e5cd771e109c1989cc57a5adb19"' }>
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
                                            'data-bs-target="#controllers-links-module-ProveedorModule-e07837591c2a2a77dcb026e6eb75b41322fcf0c1b74ee9b1a19890283c775695eecda104f2cbb61f6c1787ed524f03d29e0ae114a3dcea32799e306452c5ae49"' : 'data-bs-target="#xs-controllers-links-module-ProveedorModule-e07837591c2a2a77dcb026e6eb75b41322fcf0c1b74ee9b1a19890283c775695eecda104f2cbb61f6c1787ed524f03d29e0ae114a3dcea32799e306452c5ae49"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProveedorModule-e07837591c2a2a77dcb026e6eb75b41322fcf0c1b74ee9b1a19890283c775695eecda104f2cbb61f6c1787ed524f03d29e0ae114a3dcea32799e306452c5ae49"' :
                                            'id="xs-controllers-links-module-ProveedorModule-e07837591c2a2a77dcb026e6eb75b41322fcf0c1b74ee9b1a19890283c775695eecda104f2cbb61f6c1787ed524f03d29e0ae114a3dcea32799e306452c5ae49"' }>
                                            <li class="link">
                                                <a href="controllers/ProveedorController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProveedorController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProveedorModule-e07837591c2a2a77dcb026e6eb75b41322fcf0c1b74ee9b1a19890283c775695eecda104f2cbb61f6c1787ed524f03d29e0ae114a3dcea32799e306452c5ae49"' : 'data-bs-target="#xs-injectables-links-module-ProveedorModule-e07837591c2a2a77dcb026e6eb75b41322fcf0c1b74ee9b1a19890283c775695eecda104f2cbb61f6c1787ed524f03d29e0ae114a3dcea32799e306452c5ae49"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProveedorModule-e07837591c2a2a77dcb026e6eb75b41322fcf0c1b74ee9b1a19890283c775695eecda104f2cbb61f6c1787ed524f03d29e0ae114a3dcea32799e306452c5ae49"' :
                                        'id="xs-injectables-links-module-ProveedorModule-e07837591c2a2a77dcb026e6eb75b41322fcf0c1b74ee9b1a19890283c775695eecda104f2cbb61f6c1787ed524f03d29e0ae114a3dcea32799e306452c5ae49"' }>
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
                                            'data-bs-target="#controllers-links-module-UsuarioModule-709b14e7aa3dfa71b2d53a74ab5975a0f762a2200e7da533d976c964e8cc5fc06f5f66a37e626de709596244f25a4b5633a8bbc284369a8d46a85521014401e0"' : 'data-bs-target="#xs-controllers-links-module-UsuarioModule-709b14e7aa3dfa71b2d53a74ab5975a0f762a2200e7da533d976c964e8cc5fc06f5f66a37e626de709596244f25a4b5633a8bbc284369a8d46a85521014401e0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsuarioModule-709b14e7aa3dfa71b2d53a74ab5975a0f762a2200e7da533d976c964e8cc5fc06f5f66a37e626de709596244f25a4b5633a8bbc284369a8d46a85521014401e0"' :
                                            'id="xs-controllers-links-module-UsuarioModule-709b14e7aa3dfa71b2d53a74ab5975a0f762a2200e7da533d976c964e8cc5fc06f5f66a37e626de709596244f25a4b5633a8bbc284369a8d46a85521014401e0"' }>
                                            <li class="link">
                                                <a href="controllers/UsuarioController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsuarioController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsuarioModule-709b14e7aa3dfa71b2d53a74ab5975a0f762a2200e7da533d976c964e8cc5fc06f5f66a37e626de709596244f25a4b5633a8bbc284369a8d46a85521014401e0"' : 'data-bs-target="#xs-injectables-links-module-UsuarioModule-709b14e7aa3dfa71b2d53a74ab5975a0f762a2200e7da533d976c964e8cc5fc06f5f66a37e626de709596244f25a4b5633a8bbc284369a8d46a85521014401e0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsuarioModule-709b14e7aa3dfa71b2d53a74ab5975a0f762a2200e7da533d976c964e8cc5fc06f5f66a37e626de709596244f25a4b5633a8bbc284369a8d46a85521014401e0"' :
                                        'id="xs-injectables-links-module-UsuarioModule-709b14e7aa3dfa71b2d53a74ab5975a0f762a2200e7da533d976c964e8cc5fc06f5f66a37e626de709596244f25a4b5633a8bbc284369a8d46a85521014401e0"' }>
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
                                            'data-bs-target="#controllers-links-module-VentaProductoModule-5146f5a4f161d0ccd0da970a8a0fc51a5f1bed4ea468dbdc06c2b1549911bf4b985d788cebfaf180b00b060dba8e2a107687869c22848c9dc39a4f4016f8fba2"' : 'data-bs-target="#xs-controllers-links-module-VentaProductoModule-5146f5a4f161d0ccd0da970a8a0fc51a5f1bed4ea468dbdc06c2b1549911bf4b985d788cebfaf180b00b060dba8e2a107687869c22848c9dc39a4f4016f8fba2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-VentaProductoModule-5146f5a4f161d0ccd0da970a8a0fc51a5f1bed4ea468dbdc06c2b1549911bf4b985d788cebfaf180b00b060dba8e2a107687869c22848c9dc39a4f4016f8fba2"' :
                                            'id="xs-controllers-links-module-VentaProductoModule-5146f5a4f161d0ccd0da970a8a0fc51a5f1bed4ea468dbdc06c2b1549911bf4b985d788cebfaf180b00b060dba8e2a107687869c22848c9dc39a4f4016f8fba2"' }>
                                            <li class="link">
                                                <a href="controllers/VentaProductoController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VentaProductoController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-VentaProductoModule-5146f5a4f161d0ccd0da970a8a0fc51a5f1bed4ea468dbdc06c2b1549911bf4b985d788cebfaf180b00b060dba8e2a107687869c22848c9dc39a4f4016f8fba2"' : 'data-bs-target="#xs-injectables-links-module-VentaProductoModule-5146f5a4f161d0ccd0da970a8a0fc51a5f1bed4ea468dbdc06c2b1549911bf4b985d788cebfaf180b00b060dba8e2a107687869c22848c9dc39a4f4016f8fba2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-VentaProductoModule-5146f5a4f161d0ccd0da970a8a0fc51a5f1bed4ea468dbdc06c2b1549911bf4b985d788cebfaf180b00b060dba8e2a107687869c22848c9dc39a4f4016f8fba2"' :
                                        'id="xs-injectables-links-module-VentaProductoModule-5146f5a4f161d0ccd0da970a8a0fc51a5f1bed4ea468dbdc06c2b1549911bf4b985d788cebfaf180b00b060dba8e2a107687869c22848c9dc39a4f4016f8fba2"' }>
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
                                            'data-bs-target="#controllers-links-module-VentasModule-461e4a0ad87d1814e84f2aa94096bb96d8acc0763406859a9e3dc1e14fb1e5822f46182f5eefece0c6a9e5653ff3b71b11dba8d3807a8fa33e47585403f010d4"' : 'data-bs-target="#xs-controllers-links-module-VentasModule-461e4a0ad87d1814e84f2aa94096bb96d8acc0763406859a9e3dc1e14fb1e5822f46182f5eefece0c6a9e5653ff3b71b11dba8d3807a8fa33e47585403f010d4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-VentasModule-461e4a0ad87d1814e84f2aa94096bb96d8acc0763406859a9e3dc1e14fb1e5822f46182f5eefece0c6a9e5653ff3b71b11dba8d3807a8fa33e47585403f010d4"' :
                                            'id="xs-controllers-links-module-VentasModule-461e4a0ad87d1814e84f2aa94096bb96d8acc0763406859a9e3dc1e14fb1e5822f46182f5eefece0c6a9e5653ff3b71b11dba8d3807a8fa33e47585403f010d4"' }>
                                            <li class="link">
                                                <a href="controllers/VentasController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VentasController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-VentasModule-461e4a0ad87d1814e84f2aa94096bb96d8acc0763406859a9e3dc1e14fb1e5822f46182f5eefece0c6a9e5653ff3b71b11dba8d3807a8fa33e47585403f010d4"' : 'data-bs-target="#xs-injectables-links-module-VentasModule-461e4a0ad87d1814e84f2aa94096bb96d8acc0763406859a9e3dc1e14fb1e5822f46182f5eefece0c6a9e5653ff3b71b11dba8d3807a8fa33e47585403f010d4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-VentasModule-461e4a0ad87d1814e84f2aa94096bb96d8acc0763406859a9e3dc1e14fb1e5822f46182f5eefece0c6a9e5653ff3b71b11dba8d3807a8fa33e47585403f010d4"' :
                                        'id="xs-injectables-links-module-VentasModule-461e4a0ad87d1814e84f2aa94096bb96d8acc0763406859a9e3dc1e14fb1e5822f46182f5eefece0c6a9e5653ff3b71b11dba8d3807a8fa33e47585403f010d4"' }>
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
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
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