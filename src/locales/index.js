import { computed, ref } from 'vue';

const storageKey = 'fulltime-locale';
const supportedLocales = ['pt-BR', 'en-US', 'es-ES'];

const messages = {
  'pt-BR': {
    language: 'Idioma',
    nav: {
      benefits: 'Benefícios',
      plans: 'Compare os planos',
      contact: 'Contato',
      services: 'Serviços',
      products: 'Nossos produtos',
      discover: 'Conheça o e-canhoto',
      login: 'Já é cliente? Login',
    },
    hero: {
      eyebrow: 'ALAVANQUE SUAS NOTAS FISCAIS',
      title: 'Impulsione a gestão de canhotos da sua empresa',
      description: 'Reduza a burocracia e o tempo gastos com gestão de canhotos, notas fiscais e recibos em sua empresa.',
      action: 'Comece agora',
    },
    benefits: {
      eyebrow: 'BENEFÍCIOS DO E-CANHOTO FULLTIME',
      description: 'Aplicativo com plataforma Web integrada, desenvolvido para otimizar a gestão de entregas, substituindo o comprovante de entrega físico por uma solução inteligente com armazenamento online.',
      cloud: 'Cloud',
      cloudDescription: 'Armazenamento e upload de seus canhotos em nuvem com disponibilidade on-demand.',
      security: 'Segurança',
      securityDescription: 'Todas as suas informações de pagamento com segurança anti-invasões.',
      storage: 'Armazenamento',
      storageDescription: 'Armazene toneladas de arquivos quando quiser.',
    },
    testimonial: {
      quote: '“Depois de começarmos a utilizar o E-Canhoto em nossa equipe de Fiscal e Contabilidade conseguimos reduzir as demandas de busca por notas pela metade!”',
      author: 'Isabely Oliveira',
      role: 'Chefe executiva da neXus',
      finalQuote: '“Simplesmente a melhor escolha em gestão de canhotos que já encontrei. Reduzimos custos, gastos e aumentamos o desempenho dessas equipes! Obrigado, FullTime!”',
      finalAuthor: 'Allan Borges',
      finalRole: 'Owner da SharkShop',
    },
    metrics: {
      economy: 'de economia com custos operacionais tradicionalistas.',
      time: 'de redução de tempo em gestão de canhotos.',
      rating: 'Nota da avaliação geral dos clientes do E-canhoto.',
    },
    services: {
      eyebrow: 'POR QUE NOS ESCOLHER?',
      title: 'Oferecemos o melhor serviço de gestão de canhotos',
      personalized: 'Atendimento personalizado',
      personalizedDescription: 'Atendimento humanizado e solícito, com treinamento da plataforma e suas funcionalidades.',
      multitasks: 'Multi-tarefas',
      multitasksDescription: 'Uma aplicação robusta e eficiente, otimizada para integrar canhotos com segurança.',
      reports: 'Relatórios personalizados',
      reportsDescription: 'Exportação em Excel e PDF personalizada de seus fluxos, de acordo com o filtro escolhido.',
      deliveries: 'Gestão de Entregas',
      deliveriesDescription: 'Geolocalização de suas entregas para reduzir preocupações com entregas não realizadas.',
    },
    products: {
      eyebrow: 'OUTROS PRODUTOS FULLTIME®',
      title: 'Conheça o ecossistema Fulltime.',
      security: 'Segurança e monitoramento',
      simCards: 'Controle de SIM Cards',
      operations: 'Agilidade em operações',
      logistics: 'Logística e gestão',
      cases: 'Veja todos os cases de sucesso',
    },
    plans: {
      title: 'Escolha o melhor plano para sua empresa',
      buy: 'Comprar plano',
      users: 'usuários',
      receipts: 'canhotos/mês',
      support: 'Suporte por e-mail e ticket',
      save: 'Economize',
      cash: 'à vista',
      perYear: 'por ano em até',
      interestFree: '6x sem juros',
      bestValue: 'Melhor custo benefício',
      consultant: 'fale com um consultor',
      one: 'Plano 1',
      two: 'Plano 2',
      three: 'Plano 3',
      month: '/mês',
      or: 'ou',
    },
    footer: {
      solutions: 'Soluções',
      institutional: 'Institucional',
      about: 'Sobre',
      blog: 'Blog',
      resellers: 'Revendedores',
      regulations: 'Regulamentos de Campanha',
      careers: 'Trabalhe Conosco',
      latam: 'Latam',
      mexico: 'México',
      argentina: 'Argentina',
      brazil: 'Brasil',
      contact: 'Contato',
      units: 'Unidades',
      talk: 'Fale Conosco',
    },
  },
  'en-US': {
    language: 'Language',
    nav: {
      benefits: 'Benefits',
      plans: 'Compare plans',
      contact: 'Contact',
      services: 'Services',
      products: 'Our products',
      discover: 'Discover e-canhoto',
      login: 'Already a customer? Login',
    },
    hero: {
      eyebrow: 'BOOST YOUR INVOICES',
      title: 'Improve your company’s delivery receipt management',
      description: 'Reduce the bureaucracy and time spent managing delivery receipts, invoices and receipts in your company.',
      action: 'Get started',
    },
    benefits: {
      eyebrow: 'E-CANHOTO FULLTIME BENEFITS',
      description: 'An integrated web platform developed to optimize delivery management, replacing physical proof of delivery with an intelligent solution and online storage.',
      cloud: 'Cloud',
      cloudDescription: 'Store and upload your delivery receipts to the cloud with on-demand availability.',
      security: 'Security',
      securityDescription: 'All your payment information protected with anti-intrusion security.',
      storage: 'Storage',
      storageDescription: 'Store thousands of files whenever you need.',
    },
    testimonial: {
      quote: '“After we started using E-Canhoto with our Tax and Accounting team, we reduced the demand for finding invoices by half!”',
      author: 'Isabely Oliveira',
      role: 'Executive officer at neXus',
      finalQuote: '“Simply the best choice for delivery receipt management I have ever found. We reduced costs and improved our teams’ performance! Thank you, FullTime!”',
      finalAuthor: 'Allan Borges',
      finalRole: 'Owner at SharkShop',
    },
    metrics: {
      economy: 'saved in traditional operating costs.',
      time: 'less time spent managing delivery receipts.',
      rating: 'Overall customer rating for E-canhoto.',
    },
    services: {
      eyebrow: 'WHY CHOOSE US?',
      title: 'We offer the best delivery receipt management service',
      personalized: 'Personalized support',
      personalizedDescription: 'Humanized support and training on the platform and its features.',
      multitasks: 'Multi-tasking',
      multitasksDescription: 'A robust and efficient application optimized to securely integrate delivery receipts.',
      reports: 'Customized reports',
      reportsDescription: 'Customized Excel and PDF exports based on the filters you choose.',
      deliveries: 'Delivery management',
      deliveriesDescription: 'Delivery geolocation that reduces concerns about unsuccessful deliveries.',
    },
    products: {
      eyebrow: 'OTHER FULLTIME® PRODUCTS',
      title: 'Discover the Fulltime ecosystem.',
      security: 'Security and monitoring',
      simCards: 'SIM card management',
      operations: 'Operational agility',
      logistics: 'Logistics and management',
      cases: 'See all success stories',
    },
    plans: {
      title: 'Choose the best plan for your company',
      buy: 'Buy plan',
      users: 'users',
      receipts: 'receipts/month',
      support: 'Email and ticket support',
      save: 'Save',
      cash: 'upfront',
      perYear: 'per year in up to',
      interestFree: '6 interest-free payments',
      bestValue: 'Best value',
      consultant: 'talk to a consultant',
      one: 'Plan 1',
      two: 'Plan 2',
      three: 'Plan 3',
      month: '/month',
      or: 'or',
    },
    footer: {
      solutions: 'Solutions',
      institutional: 'Institutional',
      about: 'About us',
      blog: 'Blog',
      resellers: 'Resellers',
      regulations: 'Campaign regulations',
      careers: 'Work with us',
      latam: 'Latam',
      mexico: 'Mexico',
      argentina: 'Argentina',
      brazil: 'Brazil',
      contact: 'Contact',
      units: 'Locations',
      talk: 'Contact us',
    },
  },
  'es-ES': {
    language: 'Idioma',
    nav: {
      benefits: 'Beneficios',
      plans: 'Comparar planes',
      contact: 'Contacto',
      services: 'Servicios',
      products: 'Nuestros productos',
      discover: 'Conoce e-canhoto',
      login: '¿Ya eres cliente? Iniciar sesión',
    },
    hero: {
      eyebrow: 'IMPULSA TUS FACTURAS',
      title: 'Mejora la gestión de comprobantes de entrega de tu empresa',
      description: 'Reduce la burocracia y el tiempo dedicado a gestionar comprobantes de entrega, facturas y recibos en tu empresa.',
      action: 'Comenzar ahora',
    },
    benefits: {
      eyebrow: 'BENEFICIOS DE E-CANHOTO FULLTIME',
      description: 'Plataforma web integrada desarrollada para optimizar la gestión de entregas, sustituyendo el comprobante físico por una solución inteligente con almacenamiento en línea.',
      cloud: 'Nube',
      cloudDescription: 'Almacena y carga tus comprobantes de entrega en la nube con disponibilidad bajo demanda.',
      security: 'Seguridad',
      securityDescription: 'Toda tu información de pagos protegida con seguridad contra intrusiones.',
      storage: 'Almacenamiento',
      storageDescription: 'Almacena miles de archivos cuando lo necesites.',
    },
    testimonial: {
      quote: '“Después de comenzar a utilizar E-Canhoto con nuestro equipo Fiscal y Contable, redujimos a la mitad la demanda de búsqueda de facturas!”',
      author: 'Isabely Oliveira',
      role: 'Directora ejecutiva de neXus',
      finalQuote: '“Simplemente la mejor opción en gestión de comprobantes que he encontrado. Reducimos costos y mejoramos el rendimiento de nuestros equipos. ¡Gracias, FullTime!”',
      finalAuthor: 'Allan Borges',
      finalRole: 'Propietario de SharkShop',
    },
    metrics: {
      economy: 'de ahorro en costos operativos tradicionales.',
      time: 'menos tiempo en la gestión de comprobantes.',
      rating: 'Evaluación general de los clientes de E-canhoto.',
    },
    services: {
      eyebrow: '¿POR QUÉ ELEGIRNOS?',
      title: 'Ofrecemos el mejor servicio de gestión de comprobantes',
      personalized: 'Atención personalizada',
      personalizedDescription: 'Atención humanizada y capacitación sobre la plataforma y sus funciones.',
      multitasks: 'Multitareas',
      multitasksDescription: 'Una aplicación robusta y eficiente, optimizada para integrar comprobantes con seguridad.',
      reports: 'Informes personalizados',
      reportsDescription: 'Exportación personalizada en Excel y PDF según los filtros seleccionados.',
      deliveries: 'Gestión de entregas',
      deliveriesDescription: 'Geolocalización de entregas para reducir las preocupaciones por entregas no realizadas.',
    },
    products: {
      eyebrow: 'OTROS PRODUCTOS FULLTIME®',
      title: 'Conoce el ecosistema Fulltime.',
      security: 'Seguridad y monitoreo',
      simCards: 'Gestión de tarjetas SIM',
      operations: 'Agilidad operativa',
      logistics: 'Logística y gestión',
      cases: 'Ver todos los casos de éxito',
    },
    plans: {
      title: 'Elige el mejor plan para tu empresa',
      buy: 'Comprar plan',
      users: 'usuarios',
      receipts: 'comprobantes/mes',
      support: 'Soporte por correo y ticket',
      save: 'Ahorra',
      cash: 'al contado',
      perYear: 'al año en hasta',
      interestFree: '6 cuotas sin intereses',
      bestValue: 'Mejor relación costo-beneficio',
      consultant: 'habla con un consultor',
      one: 'Plan 1',
      two: 'Plan 2',
      three: 'Plan 3',
      month: '/mes',
      or: 'o',
    },
    footer: {
      solutions: 'Soluciones',
      institutional: 'Institucional',
      about: 'Sobre nosotros',
      blog: 'Blog',
      resellers: 'Revendedores',
      regulations: 'Reglamentos de campaña',
      careers: 'Trabaja con nosotros',
      latam: 'Latam',
      mexico: 'México',
      argentina: 'Argentina',
      brazil: 'Brasil',
      contact: 'Contacto',
      units: 'Unidades',
      talk: 'Contáctanos',
    },
  },
};

const internalMessages = {
  'pt-BR': {
    auth: { email: 'Insira seu e-mail', password: 'Insira sua senha', forgot: 'Esqueceu seu acesso?', login: 'Login', back: 'Voltar', invalid: 'Dados incorretos. Por favor, tente novamente.' },
    sidebar: { newReceipt: 'Novo Canhoto', dashboard: 'Dashboard', receipts: 'Canhotos', collaborators: 'Colaboradores', logout: 'Sair' },
    common: { cancel: 'Cancelar', save: 'Salvar', saveChanges: 'Salvar Alterações', upload: 'Upload', optional: 'Opcional', selectStatus: 'Selecione o status', status: 'Status', today: 'Hoje', yes: 'SIM', no: 'NÃO', edit: 'Editar' },
    dashboard: { overview: 'Visão geral da empresa', usersMonth: 'Usuários do mês', receiptsMonth: 'Canhotos do mês', totalReceipts: 'Total de canhotos', goldPlan: 'Plano Gold', nextInvoice: 'Próx. fatura', viewInvoice: 'Ver fatura', userManagement: 'Gestão de usuários', newUser: 'Novo Usuário', recent: 'Últimos canhotos', allReceipts: 'Ver todos os canhotos', name: 'Nome', email: 'Email', birthDate: 'Data de Nascimento', admin: 'É admin', includedAt: 'Data de inclusão', options: 'Opções' },
    canhotos: { title: 'Canhotos', value: 'Valor do Recibo', nf: 'Número NF', key: 'Chave NF', generator: 'Gerador (Entrega)', includedAt: 'Data de Inclusão', authenticated: 'Autenticado', options: 'Opções', getReceipt: 'Obter canhoto', newReceipt: 'Novo Canhoto', search: 'Buscar canhoto via NF', receiptsMonth: 'Canhotos do mês', totalReceipts: 'Total de canhotos', company: 'Empresa', receiptValue: 'Valor do canhoto', nfNumber: 'Número da Nota fiscal', nfKey: 'Número da Chave da Nota Fiscal', generatedBy: 'Gerado por', image: 'Selecione a imagem do canhoto', update: 'Atualizar canhoto', create: 'Novo Canhoto' },
    users: { title: 'Colaboradores', name: 'Nome', email: 'Email', birthDate: 'Data de Nascimento', admin: 'É admin', includedAt: 'Data de inclusão', options: 'Opções', newUser: 'Novo Usuário' },
    registration: { title: 'Cadastro de Usuário', profileImage: 'Upload Imagem Perfil', name: 'Seu nome', surname: 'Sobrenome', email: 'E-mail', password: 'Senha', birthDate: 'Data de Nascimento', city: 'Cidade', zip: 'CEP', country: 'País', address: 'Endereço atual', create: 'Cadastrar', back: 'Voltar' },
    stepper: { companyData: 'Dados cadastrais', logistics: 'Dados de logística', billing: 'Dados de cobrança', companyImage: 'Imagem da Empresa', userData: 'Dados do Usuário', companyName: 'Nome da Empresa', businessPhone: 'Telefone comercial', email: 'E-mail', cnpj: 'CNPJ da Empresa', legalName: 'Razão Social', next: 'Avançar', headquarters: 'Localização da sede', employees: 'Quantidade de funcionários', industrialSize: 'Porte Industrial', bankAccount: 'Conta Bancária', billingAddress: 'Endereço de Cobrança', revenue: 'Receita Estimada', uploadCompany: 'Upload de imagem da empresa', userName: 'Nome do Usuário', surname: 'Sobrenome', password: 'Senha', birthDate: 'Data de Nascimento', confirmPassword: 'Confirmar Senha', createAccount: 'Criar conta', back: 'Voltar' }
  },
  'en-US': {
    auth: { email: 'Enter your email', password: 'Enter your password', forgot: 'Forgot your access?', login: 'Login', back: 'Back', invalid: 'Incorrect credentials. Please try again.' },
    sidebar: { newReceipt: 'New receipt', dashboard: 'Dashboard', receipts: 'Receipts', collaborators: 'Collaborators', logout: 'Log out' },
    common: { cancel: 'Cancel', save: 'Save', saveChanges: 'Save changes', upload: 'Upload', optional: 'Optional', selectStatus: 'Select status', status: 'Status', today: 'Today', yes: 'YES', no: 'NO', edit: 'Edit' },
    dashboard: { overview: 'Company overview', usersMonth: 'Users this month', receiptsMonth: 'Receipts this month', totalReceipts: 'Total receipts', goldPlan: 'Gold plan', nextInvoice: 'Next invoice', viewInvoice: 'View invoice', userManagement: 'User management', newUser: 'New user', recent: 'Recent receipts', allReceipts: 'View all receipts', name: 'Name', email: 'Email', birthDate: 'Date of birth', admin: 'Admin', includedAt: 'Added on', options: 'Options' },
    canhotos: { title: 'Receipts', value: 'Receipt value', nf: 'Invoice number', key: 'Invoice key', generator: 'Generated by', includedAt: 'Added on', authenticated: 'Authenticated', options: 'Options', getReceipt: 'Get receipt', newReceipt: 'New receipt', search: 'Search receipt by invoice', receiptsMonth: 'Receipts this month', totalReceipts: 'Total receipts', company: 'Company', receiptValue: 'Receipt value', nfNumber: 'Invoice number', nfKey: 'Invoice key', generatedBy: 'Generated by', image: 'Select receipt image', update: 'Update receipt', create: 'New receipt' },
    users: { title: 'Collaborators', name: 'Name', email: 'Email', birthDate: 'Date of birth', admin: 'Admin', includedAt: 'Added on', options: 'Options', newUser: 'New user' },
    registration: { title: 'User registration', profileImage: 'Upload profile image', name: 'Your name', surname: 'Last name', email: 'Email', password: 'Password', birthDate: 'Date of birth', city: 'City', zip: 'ZIP code', country: 'Country', address: 'Current address', create: 'Register', back: 'Back' },
    stepper: { companyData: 'Company details', logistics: 'Logistics details', billing: 'Billing details', companyImage: 'Company image', userData: 'User details', companyName: 'Company name', businessPhone: 'Business phone', email: 'Email', cnpj: 'Company tax ID', legalName: 'Legal name', next: 'Next', headquarters: 'Headquarters location', employees: 'Number of employees', industrialSize: 'Company size', bankAccount: 'Bank account', billingAddress: 'Billing address', revenue: 'Estimated revenue', uploadCompany: 'Upload company image', userName: 'User name', surname: 'Last name', password: 'Password', birthDate: 'Date of birth', confirmPassword: 'Confirm password', createAccount: 'Create account', back: 'Back' }
  },
  'es-ES': {
    auth: { email: 'Ingresa tu correo electrónico', password: 'Ingresa tu contraseña', forgot: '¿Olvidaste tu acceso?', login: 'Iniciar sesión', back: 'Volver', invalid: 'Datos incorrectos. Inténtalo de nuevo.' },
    sidebar: { newReceipt: 'Nuevo comprobante', dashboard: 'Panel', receipts: 'Comprobantes', collaborators: 'Colaboradores', logout: 'Cerrar sesión' },
    common: { cancel: 'Cancelar', save: 'Guardar', saveChanges: 'Guardar cambios', upload: 'Cargar', optional: 'Opcional', selectStatus: 'Selecciona el estado', status: 'Estado', today: 'Hoy', yes: 'SÍ', no: 'NO', edit: 'Editar' },
    dashboard: { overview: 'Resumen de la empresa', usersMonth: 'Usuarios del mes', receiptsMonth: 'Comprobantes del mes', totalReceipts: 'Total de comprobantes', goldPlan: 'Plan Gold', nextInvoice: 'Próxima factura', viewInvoice: 'Ver factura', userManagement: 'Gestión de usuarios', newUser: 'Nuevo usuario', recent: 'Últimos comprobantes', allReceipts: 'Ver todos los comprobantes', name: 'Nombre', email: 'Correo electrónico', birthDate: 'Fecha de nacimiento', admin: 'Administrador', includedAt: 'Fecha de inclusión', options: 'Opciones' },
    canhotos: { title: 'Comprobantes', value: 'Valor del comprobante', nf: 'Número de factura', key: 'Clave de factura', generator: 'Generado por', includedAt: 'Fecha de inclusión', authenticated: 'Autenticado', options: 'Opciones', getReceipt: 'Obtener comprobante', newReceipt: 'Nuevo comprobante', search: 'Buscar comprobante por factura', receiptsMonth: 'Comprobantes del mes', totalReceipts: 'Total de comprobantes', company: 'Empresa', receiptValue: 'Valor del comprobante', nfNumber: 'Número de factura', nfKey: 'Clave de factura', generatedBy: 'Generado por', image: 'Selecciona la imagen del comprobante', update: 'Actualizar comprobante', create: 'Nuevo comprobante' },
    users: { title: 'Colaboradores', name: 'Nombre', email: 'Correo electrónico', birthDate: 'Fecha de nacimiento', admin: 'Administrador', includedAt: 'Fecha de inclusión', options: 'Opciones', newUser: 'Nuevo usuario' },
    registration: { title: 'Registro de usuario', profileImage: 'Cargar imagen de perfil', name: 'Tu nombre', surname: 'Apellido', email: 'Correo electrónico', password: 'Contraseña', birthDate: 'Fecha de nacimiento', city: 'Ciudad', zip: 'Código postal', country: 'País', address: 'Dirección actual', create: 'Registrar', back: 'Volver' },
    stepper: { companyData: 'Datos de la empresa', logistics: 'Datos de logística', billing: 'Datos de facturación', companyImage: 'Imagen de la empresa', userData: 'Datos del usuario', companyName: 'Nombre de la empresa', businessPhone: 'Teléfono comercial', email: 'Correo electrónico', cnpj: 'Identificación fiscal', legalName: 'Razón social', next: 'Siguiente', headquarters: 'Ubicación de la sede', employees: 'Cantidad de empleados', industrialSize: 'Tamaño de la empresa', bankAccount: 'Cuenta bancaria', billingAddress: 'Dirección de facturación', revenue: 'Ingresos estimados', uploadCompany: 'Cargar imagen de la empresa', userName: 'Nombre del usuario', surname: 'Apellido', password: 'Contraseña', birthDate: 'Fecha de nacimiento', confirmPassword: 'Confirmar contraseña', createAccount: 'Crear cuenta', back: 'Volver' }
  }
};

for (const language of supportedLocales) {
  Object.assign(messages[language], internalMessages[language]);
}

function getInitialLocale() {
  const savedLocale = localStorage.getItem(storageKey);
  return supportedLocales.includes(savedLocale) ? savedLocale : 'pt-BR';
}

export const locale = ref(getInitialLocale());

function resolveMessage(source, path) {
  return path.split('.').reduce((value, key) => value?.[key], source);
}

export function translate(key) {
  return resolveMessage(messages[locale.value], key)
    ?? resolveMessage(messages['pt-BR'], key)
    ?? key;
}

export function setLocale(nextLocale) {
  if (!supportedLocales.includes(nextLocale)) return;
  locale.value = nextLocale;
  localStorage.setItem(storageKey, nextLocale);
  document.documentElement.lang = nextLocale;
}

export function useI18n() {
  return {
    locale,
    locales: supportedLocales,
    t: translate,
    setLocale,
    currentLocale: computed(() => locale.value),
  };
}

export function installI18n(app) {
  app.config.globalProperties.$t = translate;
  app.config.globalProperties.$locale = locale;
  app.config.globalProperties.$locales = supportedLocales;
  app.config.globalProperties.$setLocale = setLocale;
  app.provide('i18n', useI18n());
  document.documentElement.lang = locale.value;
}
