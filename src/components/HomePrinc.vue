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
              <a class="nav-link active" href="#beneficios">Benefícios</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#planos">Compare os planos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contato">Contato</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#servicos">Serviços</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#produtos">Nossos produtos</a>
            </li>
          </ul>
          <div class="d-flex">
            <a href="#planos"
              class="btn btn-sm btn__conheca__produto me-4 d-flex align-items-center justify-content-center">Conheça o
              e-canhoto</a>

            <RouterLink to="/login"
              class="btn__conheca__produto btn btn-sm d-flex align-items-center justify-content-center">Já é cliente?
              Login</RouterLink>
          </div>
        </div>
      </div>
    </nav>

    <div class="container-sm">
      <div class="row mt-5">
        <div class="col-md-5 text__main__1 me-auto">
          <p class="p__main">ALAVANQUE SUAS NOTAS FISCAIS</p>
          <h1 class="h1__main">Impulsione a gestão de canhotos da sua empresa</h1>
          <h6 class="h5__main">Reduza a burocracia e o tempo gastos com gestão <br>de canhotos, notas fiscais e recibos
            em sua <br>empresa.</h6>
          <a href="" class="btn btn-sm btn__comecar d-flex align-items-center justify-content-center">Comece agora</a>
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
          <h6 class="p__segundo__text mt-5">BENEFÍCIOS DO E-CANHOTO FULLTIME</h6>
          <h6 class="h6__segundo__text upper-case mt-5 mb-5">Aplicativo com plataforma Web integrada, desenvolvido para
            otimizar a gestão de entregas,
            substituindo o comprovante de entrega físico por uma solução inteligente com armazenamento online.</h6>
        </div>

      </div>
    </div>
  </div>

  <div class="container-fluid beneficios__cards d-flex justify-content-center position-relative mt-5">
    <div class="col-md-3 segundo__bloco__1">
      <img src="@/assets/img/cloud.png" class="img__icone__1 img-fluid" alt="">
      <h6 class="bloco__text__1">Cloud</h6>
      <p class="bloco__text__2">Armazenamento e upload de seus canhotos em nuvem com disponibilidade on-demand.</p>
    </div>
    <div class="col-md-3 segundo__bloco__2">
      <img src="@/assets/img/security.png" class="img__icone__2 img-fluid" alt="">
      <h6 class="bloco__text">Segurança</h6>
      <p class="bloco__text__2">Todas as suas informações de pagamento com segurança anti-invasões.</p>
    </div>
    <div class="col-md-3 segundo__bloco__3">
      <img src="@/assets/img/storage.png" class="img__icone__3 img-fluid" alt="">
      <h6 class="bloco__text">Armazenamento</h6>
      <p class="bloco__text__2">Armazene toneladas de arquivos quando quiser.</p>
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
        <h6 class="h6__main__quarto__container">“Depois de começarmos a utilizar o E-Canhoto em nossa equipe de Fiscal e
          Contabilidade
          conseguimos reduzir as demandas de busca por notas pela metade!”</h6>
        <p class="p__main__text__quarto__container"><span class="p__main__quarto__texto">Isabely Oliveira</span> | Chefe
          executiva da neXus</p>
      </div>

    </div>
  </div>

  <div class="container-fluid position-relative">
    <div class="container-sm d-flex quinto__container">
      <div class="col-md-4 me-5 bloco__quinto__valores">
        <h1 class="text__quinto__container">+R$500.000</h1>
        <p class="bloco__texto__5">de economia com custos operacionais tradicionalistas.</p>
      </div>
      <div class="col-md-4 me-5 bloco__quinto__valores">
        <h1 class="text__quinto__container">95%</h1>
        <p class="bloco__texto__5">de redução de tempo em gestão de canhotos.</p>
      </div>
      <div class="col-md-4 me-2 bloco__quinto__valores">
        <h1 class="text__quinto__container">4.9/5.0</h1>
        <p class="bloco__texto__5">Nota da avaliação geral dos clientes do E-canhoto.</p>
      </div>
    </div>
  </div>

  <div class="container-fluid position-relative" id="servicos">
    <div class="container-sm sexto__container">
      <div class="row mt-5">
        <div class="col-md-12 text-center">
          <p class="p__sexto__text upper-case mt-4">POR QUE NOS ESCOLHER?</p>
          <h1 class="h1__sexto__text">Oferecemos o melhor serviço de <br>gestão de canhotos</h1>
        </div>
        <div class="col-md-12 sexto__container__cards">
          <div class="row">
            <div class="col-md-6 sexto__bloco__1 mb-5">
              <img src="@/assets/img/pessoa.jpg" class="img-fluid" alt="">
              <div class="ms-3">
                <h6 class="sexto__text__h6">Atendimento personalizado</h6>
                <p class="sexto__text__p">Atendimento humanizado e <br>solicito, com treinamento da<br> plataforma e
                  suas funcionalidades.
                </p>
              </div>

            </div>

            <div class="col-md-6 sexto__bloco__1 mb-5">
              <img src="@/assets/img/multitarefa.jpg" class="img-fluid" alt="">
              <div class="ms-3">
                <h6 class="sexto__text__h6">Multi-tarefas</h6>
                <p class="sexto__text__p">Uma aplicação robusta e com eficiência, onde <br>trabalhamos diretamente em
                  sua otimização<br>para integração dos canhotos com segurança.
                </p>
              </div>

            </div>
          </div>

          <div class="row">
            <div class="col-md-6 sexto__bloco__1 mt-4">
              <img src="@/assets/img/conversa.jpg" class="img-fluid" alt="">
              <div class="ms-3">
                <h6 class="sexto__text__h6">Relatórios personalizados</h6>
                <p class="sexto__text__p">Exportação em Excel e PDF <br>personalizado de seus fluxos, de acordo <br>com
                  o filtro que você indicar.
                </p>
              </div>

            </div>

            <div class="col-md-6 sexto__bloco__1 mt-4">
              <img src="@/assets/img/gestao.jpg" class="img-fluid" alt="">
              <div class="ms-3">
                <h6 class="sexto__text__h6">Gestão de Entregas</h6>
                <p class="sexto__text__p">Trabalhamos diretamente com a <br>geolocalização de suas entregas, removendo
                  a<br> preocupação com a falta de entregas.
                </p>
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
          <p class="p__setimo__text upper-case mt-5">outros produtos <span class="p__span__text__setimo">fulltime®</span></p>
          <h1 class="h1__setimo__text">Conheça o ecossistema <span class="h1__span__text__setimo">Fulltime.</span></h1>
        </div>
        <div class="col-md-12 setimo__container__cards">
          <div class="row">

            <div class="col-md-6 d-flex flex-column align-items-center">
              <div class="card-1">
                <img src="@/assets/img/fullcam.png" alt="Imagem da Fullcam"
                  class="img-fluid img__cards__setimo__1 mx-auto">
              </div>

              <div class="text__setimo text-start mt-3">
                <p class="setimo__conteudo__text__card__1">Segurança e monitoramento</p>
                <h3 class="upper-case setimo__conteudo__text2__card__1">Full Cam</h3>
              </div>
            </div>

            <div class="col-md-6 d-flex flex-column align-items-center">
              <div class="card-2">
                <img src="@/assets/img/fullmanager.png" alt="Imagem do Fullmanager"
                  class="img-fluid img__cards__setimo__2 mx-auto">
              </div>

              <div class="text__setimo-2 text-start mt-3">
                <p class="setimo__conteudo__text__card__1">Controle de SIM Cards</p>
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
                  <p class="setimo__conteudo__text__card__1">Agilidade em operações</p>
                  <h3 class="upper-case setimo__conteudo__text2__card__1">FULL CENTER</h3>
                </div>
              </div>

              <div class="col-md-6 d-flex flex-column align-items-center">
                <div class="card-4">
                  <img src="@/assets/img/fulltrack.png" alt="Imagem do Fulltrack"
                    class="img-fluid img__cards__setimo__4 mx-auto">
                </div>

                <div class="text__setimo-3 text-start mt-3">
                  <p class="setimo__conteudo__text__card__1">Logística e gestão</p>
                  <h3 class="upper-case setimo__conteudo__text2__card__1">FULL TRACK</h3>
                </div>
              </div>

              <a href="#" class="text__card__setimo__cases text-center text-decoration-none underline-hover">Veja todos
                os cases de
                sucesso <i class="bi bi-arrow-right-short"></i></a>

            </div>

          </div>
        </div>

      </div>
    </div>
  </div>

  <div class="container-fluid oitavo__container">
    <div class="container-sm">
      <div class="row mt-5">
        <p class="text-center text__oitavo__p">“Simplesmente a melhor escolha em <br>gestão de canhotos que já
          encontrei.<br> Reduzimos custos, gastos e aumentamos <br>o desempenho dessas equipes!<br> Obrigado, FullTime!”
        </p>

        <img src="@/assets/img/oval-2.png" class="img-fluid img__oitavo__container text-center">
        <p class="text-center text__oitavo__p__2 mt-1">Allan Borges<br><span class="text__oitavo__p__3">Owner da
            SharkShop</span></p>

      </div>
    </div>

  </div>

  <div class="container-fluid container__planos" id="planos">
    <div class="container-sm">
      <div class="row mt-5">

        <div class="planos">
          <div class="text__planos">Escolha o melhor plano para sua empresa</div>

          <div class="card__planos">
            <div class="card__planos__container">
              <div class="card__planos__container__2">
                <div class="card__planos__container__3">
                  <div class="card__planos__title">Plano 1</div>
                  <div class="card__planos__container__interno">
                    <div class="card__planos__texto__1">R$</div>
                    <div class="card__planos__texto__2__div">
                      <div class="card__planos__texto__2">12</div>
                      <div class="card__planos__texto__1">/mês</div>
                    </div>
                  </div>
                  <div class="card__planos__texto__3__div">

                    <div class="text-center">
                      <span class="card__planos__texto__3__span">Economize</span>
                      <span class="card__planos__texto__3__span__2">R$156</span>
                    </div>

                    <div class="text-center">
                      <span class="card__planos__text__3__span__3">R$2.128 por ano<br />em até </span>
                      <span class="card__planos__text__span__4">6x sem juros</span>
                    </div>
                  </div>
                  <div class="card__planos__umedois">
                    <RouterLink to="/cadastro-empresa" class="card__planos__text__3__botao text-decoration-none">Comprar plano</RouterLink>
                  </div>
                </div>
                <div class="card__planos__container__secundario">
                  <div class="card__planos__container__terceiro"></div>
                  <div class="card__planos__container__quarto">
                    <div class="card__planos__container__quinto">
                      <i class='bx bxs-user icone'></i>
                    </div>
                    <div class="card__planos__container__sexto__text">2 usuários</div>
                  </div>
                  <div class="card__planos__container__quarto">
                    <div class="card__planos__container__quinto">
                      <i class='bx bx-file icone'></i>
                    </div>
                    <div class="card__planos__container__sexto__text">100 canhotos/mês</div>
                  </div>
                  <div class="card__planos__container__quarto">
                    <div class="card__planos__container__quinto">
                      <i class='bx bxs-user-voice icone'></i>
                    </div>
                    <div class="card__planos__container__sexto__text">Suporte e-mail e ticket</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card__planos2">
              <div class="card__planos2__secundo">
                <div class="card__planos__container__2">
                  <div class="card__planos__container__3">
                    <div class="card__planos__title"> Plano 2</div>
                    <div class="card__planos__container__interno">
                      <div class="card__planos__texto__1">R$</div>
                      <div class="card__planos__texto__2__div">
                        <div class="card__planos__texto__2">94</div>
                        <div class="card__planos__texto__1">/mês</div>
                      </div>
                    </div>
                    <div class="card__planos__texto__3__div">
                      <div class="text-center">
                        <span class="card__planos__texto__3__span">Economize</span>
                        <span class="card__planos__texto__3__span__2">5%</span>
                        <span class="card__planos__texto__3__span">à vista</span>
                      </div>
                      
                      <div class="text-center">
                        <span class="card__planos__text__3__span__3">R$1.128 por ano<br />em até </span>
                        <span class="card__planos__text__span__4">6x sem juros</span>
                      </div>
                    </div>
                    <div class="card__planos__text__3__plano2__antesbotao">
                      <RouterLink to="/cadastro-empresa" class="card__planos__text__3__botao text-decoration-none">Comprar plano</RouterLink>
                    </div>
                  </div>
                  <div class="card__planos__container__secundario">
                    <div class="card__planos__container__terceiro"></div>
                    <div class="card__planos__container__quarto">
                      <div class="card__planos__container__quinto">
                        <i class='bx bxs-user icone'></i>
                      </div>
                      <div class="card__planos__container__sexto__text">15 usuários</div>
                    </div>
                    <div class="card__planos__container__quarto">
                      <div class="card__planos__container__quinto">
                        <i class='bx bx-file icone'></i>
                      </div>
                      <div class="card__planos__container__sexto__text">1500 canhotos/mês</div>
                    </div>
                    <div class="card__planos__container__quarto">
                      <div class="card__planos__container__quinto">
                        <i class='bx bxs-user-voice icone'></i>
                      </div>
                      <div class="card__planos__container__sexto__text">Suporte e-mail e ticket</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card__texto__plano2__custo">
                <div class="card__planos__planos2__textocusto">Melhor custo benefício</div>
              </div>
            </div>


            <div class="card__planos__container">
              <div class="card__planos__container__2">
                <div class="card__planos__container__3">
                  <div class="card__planos__title">Plano 3</div>
                  <div class="card__planos__container__interno">
                    <div class="card__planos__texto__1">R$</div>
                    <div class="card__planos__texto__2__div">
                      <div class="card__planos__texto__2">25</div>
                      <div class="card__planos__texto__1">/mês</div>
                    </div>
                  </div>
                  <div class="card__planos__texto__3__div">

                    <div class="text-center">
                      <span class="card__planos__texto__3__span">Economize</span>
                      <span class="card__planos__texto__3__span__2">R$156</span>
                    </div>

                    <div class="text-center">
                      <span class="card__planos__text__3__span__3">R$2.128 por ano<br />em até </span>
                      <span class="card__planos__text__span__4">6x sem juros</span>
                    </div>
                  </div>
                  <div class="card__planos__umedois">
                    <RouterLink to="/cadastro-empresa" class="card__planos__text__3__botao text-decoration-none">Comprar plano</RouterLink>
                  </div>
                </div>
                <div class="card__planos__container__secundario">
                  <div class="card__planos__container__terceiro"></div>
                  <div class="card__planos__container__quarto">
                    <div class="card__planos__container__quinto">
                      <i class='bx bxs-user icone'></i>
                    </div>
                    <div class="card__planos__container__sexto__text">12 usuários</div>
                  </div>
                  <div class="card__planos__container__quarto">
                    <div class="card__planos__container__quinto">
                      <i class='bx bx-file icone'></i>
                    </div>
                    <div class="card__planos__container__sexto__text">350 canhotos/mês</div>
                  </div>
                  <div class="card__planos__container__quarto">
                    <div class="card__planos__container__quinto">
                      <i class='bx bxs-user-voice icone'></i>
                    </div>
                    <div class="card__planos__container__sexto__text"> Suporte e-mail e ticket</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        
        <div class="text__planos mt-1 mb-5"><span class="text__planos__consultor">ou</span> <a class="text-decoration-none text__planos underline-hover" href="#">fale com um consultor</a></div>
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
          <h5 class="upper-case text__footer__principal">SOLUÇÕES</h5>
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
          <h5 class="upper-case text__footer__principal">Institucional</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text__footer__secundario">Sobre</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text__footer__secundario">Soluções</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text__footer__secundario">Blog</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text__footer__secundario">Revendedores</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text__footer__secundario">Contato</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text__footer__secundario">Regulamentos de
                Campanha</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text__footer__secundario">Trabalhe Conosco</a>
            </li>

            <h5 class="upper-case  text__footer__principal">Unidades</h5>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text__footer__secundario">Latam</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text__footer__secundario">México</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text__footer__secundario">Argentina</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text__footer__secundario">Brasil</a></li>
          </ul>
        </div>

        <div class="col mb-3">
          <h5 class="upper-case text__footer__principal">Fale Conosco</h5>
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
</script>
