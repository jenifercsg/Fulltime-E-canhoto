<template>
  <div class="container-fluid main__container">
    <nav class="navbar navbar-expand-lg d-flex">
      <div class="container-lg mt-5">
        <a class="navbar-brand" href="#"><img src="@/assets/img/fulltime-ecanhoto-logo.png" alt="" width="100"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" href="#beneficios">{{ t('nav.benefits') }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#planos">{{ t('nav.plans') }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contato">{{ t('nav.contact') }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#servicos">{{ t('nav.services') }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#produtos">{{ t('nav.products') }}</a>
            </li>
          </ul>
          <div class="d-flex navbar-actions">
            <a href="#planos"
              class="btn btn-sm btn__conheca__produto me-4 d-flex align-items-center justify-content-center">{{ t('nav.discover') }}</a>

            <RouterLink to="/login"
              class="btn__conheca__produto btn btn-sm d-flex align-items-center justify-content-center">{{ t('nav.login') }}</RouterLink>

            <label class="language-selector ms-2">
              <span class="visually-hidden">{{ t('language') }}</span>
              <select
                class="form-select form-select-sm"
                :value="locale"
                :aria-label="t('language')"
                @change="setLocale($event.target.value)"
              >
                <option v-for="language in locales" :key="language" :value="language">
                  {{ language === 'pt-BR' ? 'Português' : language === 'en-US' ? 'English' : 'Español' }}
                </option>
              </select>
            </label>
          </div>
        </div>
      </div>
    </nav>

    <div class="container-sm">
      <div class="row mt-5">
        <div class="col-md-5 text__main__1 me-auto">
          <p class="p__main">{{ t('hero.eyebrow') }}</p>
          <h1 class="h1__main">{{ t('hero.title') }}</h1>
          <h6 class="h5__main">{{ t('hero.description') }}</h6>
          <a href="#beneficios" class="btn btn-sm btn__comecar d-flex align-items-center justify-content-center">{{ t('hero.action') }}</a>
        </div>
        <div class="col-md-6 img__main">
          <img src="@/assets/img/Oval.png" alt="Logo da imagem 1" class="img-fluid">
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid segundo__container" id="beneficios">
    <div class="container-sm">
      <div class="row mt-5">
        <div class="col-md-12">
          <h6 class="p__segundo__text mt-5">{{ t('benefits.eyebrow') }}</h6>
          <h6 class="h6__segundo__text upper-case mt-5 mb-5">{{ t('benefits.description') }}</h6>
        </div>

      </div>
    </div>
  </div>

  <div class="container-fluid beneficios__cards d-flex justify-content-center position-relative mt-5">
    <div class="col-md-3 segundo__bloco__1">
      <img src="@/assets/img/cloud.png" class="img__icone__1 img-fluid" alt="">
      <h6 class="bloco__text__1">{{ t('benefits.cloud') }}</h6>
      <p class="bloco__text__2">{{ t('benefits.cloudDescription') }}</p>
    </div>
    <div class="col-md-3 segundo__bloco__2">
      <img src="@/assets/img/security.png" class="img__icone__2 img-fluid" alt="">
      <h6 class="bloco__text">{{ t('benefits.security') }}</h6>
      <p class="bloco__text__2">{{ t('benefits.securityDescription') }}</p>
    </div>
    <div class="col-md-3 segundo__bloco__3">
      <img src="@/assets/img/storage.png" class="img__icone__3 img-fluid" alt="">
      <h6 class="bloco__text">{{ t('benefits.storage') }}</h6>
      <p class="bloco__text__2">{{ t('benefits.storageDescription') }}</p>
    </div>
    <div class="bolhas__content">
      <img src="@/assets/img/bolhas.png" class="img-fluid" alt="" width="220">
    </div>
  </div>

  <div class="container-sm quarto__container">
    <div class="row mt-5">
      <div class="col-md-3 img__main me-auto">
        <img src="@/assets/img/Oval-mulher.png" alt="Logo da imagem 1" class="img-fluid">
      </div>

      <div class="col-md-9 text__main__1">
        <img src="@/assets/img/Stars.png" alt="Logo da imagem 1" class="img-fluid h6__main__stars">
        <h6 class="h6__main__quarto__container">{{ t('testimonial.quote') }}</h6>
        <p class="p__main__text__quarto__container"><span class="p__main__quarto__texto">{{ t('testimonial.author') }}</span> | {{ t('testimonial.role') }}</p>
      </div>

    </div>
  </div>

  <div class="container-fluid position-relative">
    <div class="container-sm d-flex quinto__container">
      <div class="col-md-4 me-5 bloco__quinto__valores">
        <h1 class="text__quinto__container">+R$500.000</h1>
        <p class="bloco__texto__5">{{ t('metrics.economy') }}</p>
      </div>
      <div class="col-md-4 me-5 bloco__quinto__valores">
        <h1 class="text__quinto__container">95%</h1>
        <p class="bloco__texto__5">{{ t('metrics.time') }}</p>
      </div>
      <div class="col-md-4 me-2 bloco__quinto__valores">
        <h1 class="text__quinto__container">4.9/5.0</h1>
        <p class="bloco__texto__5">{{ t('metrics.rating') }}</p>
      </div>
    </div>
  </div>

  <div class="container-fluid position-relative" id="servicos">
    <div class="container-sm sexto__container">
      <div class="row mt-5">
        <div class="col-md-12 text-center">
          <p class="p__sexto__text upper-case mt-4">{{ t('services.eyebrow') }}</p>
          <h1 class="h1__sexto__text">{{ t('services.title') }}</h1>
        </div>
        <div class="col-md-12 sexto__container__cards">
          <div class="row">
            <div class="col-md-6 sexto__bloco__1 mb-5">
              <img src="@/assets/img/pessoa.jpg" class="img-fluid" alt="">
              <div class="ms-3">
                <h6 class="sexto__text__h6">{{ t('services.personalized') }}</h6>
                <p class="sexto__text__p">{{ t('services.personalizedDescription') }}</p>
              </div>

            </div>

            <div class="col-md-6 sexto__bloco__1 mb-5">
              <img src="@/assets/img/multitarefa.jpg" class="img-fluid" alt="">
              <div class="ms-3">
                <h6 class="sexto__text__h6">{{ t('services.multitasks') }}</h6>
                <p class="sexto__text__p">{{ t('services.multitasksDescription') }}</p>
              </div>

            </div>
          </div>

          <div class="row">
            <div class="col-md-6 sexto__bloco__1 mt-4">
              <img src="@/assets/img/conversa.jpg" class="img-fluid" alt="">
              <div class="ms-3">
                <h6 class="sexto__text__h6">{{ t('services.reports') }}</h6>
                <p class="sexto__text__p">{{ t('services.reportsDescription') }}</p>
              </div>

            </div>

            <div class="col-md-6 sexto__bloco__1 mt-4">
              <img src="@/assets/img/gestao.jpg" class="img-fluid" alt="">
              <div class="ms-3">
                <h6 class="sexto__text__h6">{{ t('services.deliveries') }}</h6>
                <p class="sexto__text__p">{{ t('services.deliveriesDescription') }}</p>
              </div>
            </div>
          </div>

          <hr class="linha">
        </div>

      </div>
    </div>
  </div>

  <div class="container-fluid" id="produtos">
    <div class="container-sm">
      <div class="row mt-5">
        <div class="col-md-12">
          <p class="p__setimo__text upper-case mt-5">{{ t('products.eyebrow') }}</p>
          <h1 class="h1__setimo__text">{{ t('products.title') }}</h1>
        </div>
        <div class="col-md-12 setimo__container__cards">
          <div class="row">

            <div class="col-md-6 d-flex flex-column align-items-center">
              <div class="card-1">
                <img src="@/assets/img/fullcam.png" alt="Imagem da Fullcam"
                  class="img-fluid img__cards__setimo__1 mx-auto">
              </div>

              <div class="text__setimo text-start mt-3">
                <p class="setimo__conteudo__text__card__1">{{ t('products.security') }}</p>
                <h3 class="upper-case setimo__conteudo__text2__card__1">Full Cam</h3>
              </div>
            </div>

            <div class="col-md-6 d-flex flex-column align-items-center">
              <div class="card-2">
                <img src="@/assets/img/fullmanager.png" alt="Imagem do Fullmanager"
                  class="img-fluid img__cards__setimo__2 mx-auto">
              </div>

              <div class="text__setimo-2 text-start mt-3">
                <p class="setimo__conteudo__text__card__1">{{ t('products.simCards') }}</p>
                <h3 class="upper-case setimo__conteudo__text2__card__1">Full Manager</h3>
              </div>
            </div>

            <div class="row">

              <div class="col-md-6 d-flex flex-column align-items-center">
                <div class="card-3">
                  <img src="@/assets/img/fullcenter.png" alt="Imagem do Fullcenter"
                    class="img-fluid img__cards__setimo__3 mx-auto">
                </div>

                <div class="text__setimo text-start mt-3">
                  <p class="setimo__conteudo__text__card__1">{{ t('products.operations') }}</p>
                  <h3 class="upper-case setimo__conteudo__text2__card__1">FULL CENTER</h3>
                </div>
              </div>

              <div class="col-md-6 d-flex flex-column align-items-center">
                <div class="card-4">
                  <img src="@/assets/img/fulltrack.png" alt="Imagem do Fulltrack"
                    class="img-fluid img__cards__setimo__4 mx-auto">
                </div>

                <div class="text__setimo-3 text-start mt-3">
                  <p class="setimo__conteudo__text__card__1">{{ t('products.logistics') }}</p>
                  <h3 class="upper-case setimo__conteudo__text2__card__1">FULL TRACK</h3>
                </div>
              </div>

              <a href="#" class="text__card__setimo__cases text-center text-decoration-none underline-hover">{{ t('products.cases') }} <i class="bi bi-arrow-right-short"></i></a>

            </div>

          </div>
        </div>

      </div>
    </div>
  </div>

  <div class="container-fluid oitavo__container">
    <div class="container-sm">
      <div class="row mt-5">
        <p class="text-center text__oitavo__p">{{ t('testimonial.finalQuote') }}</p>

        <img src="@/assets/img/oval-2.png" class="img-fluid img__oitavo__container text-center">
        <p class="text-center text__oitavo__p__2 mt-1">{{ t('testimonial.finalAuthor') }}<br><span class="text__oitavo__p__3">{{ t('testimonial.finalRole') }}</span></p>

      </div>
    </div>

  </div>

  <div class="container-fluid container__planos" id="planos">
    <div class="container-sm">
      <div class="row mt-5">

        <div class="planos">
          <div class="text__planos">{{ t('plans.title') }}</div>

          <div class="card__planos">
            <div class="card__planos__container">
              <div class="card__planos__container__2">
                <div class="card__planos__container__3">
                  <div class="card__planos__title">{{ t('plans.one') }}</div>
                  <div class="card__planos__container__interno">
                    <div class="card__planos__texto__1">R$</div>
                    <div class="card__planos__texto__2__div">
                      <div class="card__planos__texto__2">12</div>
                      <div class="card__planos__texto__1">{{ t('plans.month') }}</div>
                    </div>
                  </div>
                  <div class="card__planos__texto__3__div">

                    <div class="text-center">
                      <span class="card__planos__texto__3__span">{{ t('plans.save') }}</span>
                      <span class="card__planos__texto__3__span__2">R$156</span>
                    </div>

                    <div class="text-center">
                      <span class="card__planos__text__3__span__3">R$2.128 {{ t('plans.perYear') }} </span>
                      <span class="card__planos__text__span__4">{{ t('plans.interestFree') }}</span>
                    </div>
                  </div>
                  <div class="card__planos__umedois">
                    <RouterLink to="/cadastro-empresa" class="card__planos__text__3__botao text-decoration-none">{{ t('plans.buy') }}</RouterLink>
                  </div>
                </div>
                <div class="card__planos__container__secundario">
                  <div class="card__planos__container__terceiro"></div>
                  <div class="card__planos__container__quarto">
                    <div class="card__planos__container__quinto">
                      <i class='bx bxs-user icone'></i>
                    </div>
                    <div class="card__planos__container__sexto__text">{{ '2 ' + t('plans.users') }}</div>
                  </div>
                  <div class="card__planos__container__quarto">
                    <div class="card__planos__container__quinto">
                      <i class='bx bx-file icone'></i>
                    </div>
                    <div class="card__planos__container__sexto__text">{{ '100 ' + t('plans.receipts') }}</div>
                  </div>
                  <div class="card__planos__container__quarto">
                    <div class="card__planos__container__quinto">
                      <i class='bx bxs-user-voice icone'></i>
                    </div>
                    <div class="card__planos__container__sexto__text">{{ t('plans.support') }}</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card__planos2">
              <div class="card__planos2__secundo">
                <div class="card__planos__container__2">
                  <div class="card__planos__container__3">
                    <div class="card__planos__title">{{ t('plans.two') }}</div>
                    <div class="card__planos__container__interno">
                      <div class="card__planos__texto__1">R$</div>
                      <div class="card__planos__texto__2__div">
                        <div class="card__planos__texto__2">94</div>
                        <div class="card__planos__texto__1">{{ t('plans.month') }}</div>
                      </div>
                    </div>
                    <div class="card__planos__texto__3__div">
                      <div class="text-center">
                        <span class="card__planos__texto__3__span">{{ t('plans.save') }}</span>
                        <span class="card__planos__texto__3__span__2">5%</span>
                        <span class="card__planos__texto__3__span">{{ t('plans.cash') }}</span>
                      </div>
                      
                      <div class="text-center">
                        <span class="card__planos__text__3__span__3">R$1.128 {{ t('plans.perYear') }} </span>
                        <span class="card__planos__text__span__4">{{ t('plans.interestFree') }}</span>
                      </div>
                    </div>
                    <div class="card__planos__text__3__plano2__antesbotao">
                      <RouterLink to="/cadastro-empresa" class="card__planos__text__3__botao text-decoration-none">{{ t('plans.buy') }}</RouterLink>
                    </div>
                  </div>
                  <div class="card__planos__container__secundario">
                    <div class="card__planos__container__terceiro"></div>
                    <div class="card__planos__container__quarto">
                      <div class="card__planos__container__quinto">
                        <i class='bx bxs-user icone'></i>
                      </div>
                      <div class="card__planos__container__sexto__text">{{ '15 ' + t('plans.users') }}</div>
                    </div>
                    <div class="card__planos__container__quarto">
                      <div class="card__planos__container__quinto">
                        <i class='bx bx-file icone'></i>
                      </div>
                      <div class="card__planos__container__sexto__text">{{ '1500 ' + t('plans.receipts') }}</div>
                    </div>
                    <div class="card__planos__container__quarto">
                      <div class="card__planos__container__quinto">
                        <i class='bx bxs-user-voice icone'></i>
                      </div>
                      <div class="card__planos__container__sexto__text">{{ t('plans.support') }}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card__texto__plano2__custo">
                <div class="card__planos__planos2__textocusto">{{ t('plans.bestValue') }}</div>
              </div>
            </div>


            <div class="card__planos__container">
              <div class="card__planos__container__2">
                <div class="card__planos__container__3">
                  <div class="card__planos__title">{{ t('plans.three') }}</div>
                  <div class="card__planos__container__interno">
                    <div class="card__planos__texto__1">R$</div>
                    <div class="card__planos__texto__2__div">
                      <div class="card__planos__texto__2">25</div>
                      <div class="card__planos__texto__1">{{ t('plans.month') }}</div>
                    </div>
                  </div>
                  <div class="card__planos__texto__3__div">

                    <div class="text-center">
                      <span class="card__planos__texto__3__span">{{ t('plans.save') }}</span>
                      <span class="card__planos__texto__3__span__2">R$156</span>
                    </div>

                    <div class="text-center">
                      <span class="card__planos__text__3__span__3">R$2.128 {{ t('plans.perYear') }} </span>
                      <span class="card__planos__text__span__4">{{ t('plans.interestFree') }}</span>
                    </div>
                  </div>
                  <div class="card__planos__umedois">
                    <RouterLink to="/cadastro-empresa" class="card__planos__text__3__botao text-decoration-none">{{ t('plans.buy') }}</RouterLink>
                  </div>
                </div>
                <div class="card__planos__container__secundario">
                  <div class="card__planos__container__terceiro"></div>
                  <div class="card__planos__container__quarto">
                    <div class="card__planos__container__quinto">
                      <i class='bx bxs-user icone'></i>
                    </div>
                    <div class="card__planos__container__sexto__text">{{ '12 ' + t('plans.users') }}</div>
                  </div>
                  <div class="card__planos__container__quarto">
                    <div class="card__planos__container__quinto">
                      <i class='bx bx-file icone'></i>
                    </div>
                    <div class="card__planos__container__sexto__text">{{ '350 ' + t('plans.receipts') }}</div>
                  </div>
                  <div class="card__planos__container__quarto">
                    <div class="card__planos__container__quinto">
                      <i class='bx bxs-user-voice icone'></i>
                    </div>
                      <div class="card__planos__container__sexto__text">{{ t('plans.support') }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        
        <div class="text__planos mt-1 mb-5"><span class="text__planos__consultor">{{ t('plans.or') }}</span> <a class="text-decoration-none text__planos underline-hover" href="#">{{ t('plans.consultant') }}</a></div>
      </div>

    </div>
  </div>
  <div class="container-fluid container__footer">
    <div class="container">
      <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5">
        <div class="col mb-3">
          <a href="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
            <img src="@/assets/img/fulltime-ecanhoto-logo.png" alt="" width="200">
          </a>
        </div>

        <div class="col mb-3"></div>

        <div class="col mb-3">
          <h5 class="upper-case text__footer__principal">{{ t('footer.solutions') }}</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text__footer__secundario">FullArm</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text__footer__secundario">FullCam</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text__footer__secundario">FullCenter</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text__footer__secundario">FullManager</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text__footer__secundario">FullTrack</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text__footer__secundario">FullCond</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text__footer__secundario">F/Save</a></li>
          </ul>
        </div>

        <div class="col mb-3">
          <h5 class="upper-case text__footer__principal">{{ t('footer.institutional') }}</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text__footer__secundario">{{ t('footer.about') }}</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text__footer__secundario">{{ t('footer.solutions') }}</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text__footer__secundario">{{ t('footer.blog') }}</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text__footer__secundario">{{ t('footer.resellers') }}</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text__footer__secundario">{{ t('footer.contact') }}</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text__footer__secundario">{{ t('footer.regulations') }}</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text__footer__secundario">{{ t('footer.careers') }}</a>
            </li>

            <h5 class="upper-case  text__footer__principal">{{ t('footer.units') }}</h5>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text__footer__secundario">{{ t('footer.latam') }}</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text__footer__secundario">{{ t('footer.mexico') }}</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text__footer__secundario">{{ t('footer.argentina') }}</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text__footer__secundario">{{ t('footer.brazil') }}</a></li>
          </ul>
        </div>

        <div class="col mb-3">
          <h5 class="upper-case text__footer__principal">{{ t('footer.talk') }}</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white"><img
                  src="@/assets/img/iconamoon_phone-fill.png"> +55 (14) 3407 8800</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white"><img
                  src="@/assets/img/iconamoon_phone-fill.png"> +55 (11) 5069 3200</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white"><img
                  src="@/assets/img/mdi_location.png"> Av. Presidente Vargas, 70 - Centro, Garça/SP - CEP:
                17404-318</a></li>
          </ul>
        </div>
      </footer>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from '@/locales/index.js';

const { locale, locales, t, setLocale } = useI18n();
</script>
