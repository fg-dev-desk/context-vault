import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Limpiar datos existentes
  await prisma.userActivity.deleteMany();
  await prisma.collectionPrompt.deleteMany();
  await prisma.subscription.deleteMany();
  await prisma.collection.deleteMany();
  await prisma.prompt.deleteMany();
  await prisma.subcategory.deleteMany();
  await prisma.category.deleteMany();
  await prisma.aITool.deleteMany();
  await prisma.user.deleteMany();

  // Crear usuarios
  const users = await Promise.all([
    prisma.user.create({
      data: {
        id: 'user1',
        email: 'alexdev@example.com',
        username: 'AlexDev',
        name: 'Alejandro Rodríguez',
        isPremium: true,
        createdAt: new Date('2024-01-15'),
        updatedAt: new Date('2024-12-01')
      }
    }),
    prisma.user.create({
      data: {
        id: 'user2',
        email: 'maria.cine@example.com',
        username: 'MariaCine',
        name: 'María Santos',
        isPremium: false,
        createdAt: new Date('2024-02-20'),
        updatedAt: new Date('2024-11-30')
      }
    }),
    prisma.user.create({
      data: {
        id: 'user3',
        email: 'david.copy@example.com',
        username: 'DavidCopy',
        name: 'David Chen',
        isPremium: true,
        createdAt: new Date('2024-03-10'),
        updatedAt: new Date('2024-12-01')
      }
    }),
    prisma.user.create({
      data: {
        id: 'user4',
        email: 'ana.design@example.com',
        username: 'AnaDesign',
        name: 'Ana García',
        isPremium: false,
        createdAt: new Date('2024-04-05'),
        updatedAt: new Date('2024-11-28')
      }
    }),
    prisma.user.create({
      data: {
        id: 'user5',
        email: 'carlos.biz@example.com',
        username: 'CarlosBiz',
        name: 'Carlos López',
        isPremium: true,
        createdAt: new Date('2024-05-12'),
        updatedAt: new Date('2024-12-02')
      }
    }),
    prisma.user.create({
      data: {
        id: 'user6',
        email: 'prof.laura@example.com',
        username: 'ProfLaura',
        name: 'Laura Martínez',
        isPremium: false,
        createdAt: new Date('2024-06-18'),
        updatedAt: new Date('2024-11-29')
      }
    })
  ]);

  // Crear herramientas AI
  const aiTools = await Promise.all([
    // Chatbots
    prisma.aITool.create({
      data: {
        id: 'chatgpt',
        name: 'ChatGPT',
        type: 'chatbot',
        description: 'Modelo de lenguaje conversacional de OpenAI',
        website: 'https://chat.openai.com',
        isActive: true
      }
    }),
    prisma.aITool.create({
      data: {
        id: 'claude',
        name: 'Claude',
        type: 'chatbot',
        description: 'Asistente de IA conversacional de Anthropic',
        website: 'https://claude.ai',
        isActive: true
      }
    }),
    prisma.aITool.create({
      data: {
        id: 'gemini',
        name: 'Gemini',
        type: 'chatbot',
        description: 'Modelo de lenguaje multimodal de Google',
        website: 'https://gemini.google.com',
        isActive: true
      }
    }),
    // IDEs
    prisma.aITool.create({
      data: {
        id: 'cursor',
        name: 'Cursor',
        type: 'ide',
        description: 'Editor de código impulsado por IA',
        website: 'https://cursor.sh',
        isActive: true
      }
    }),
    prisma.aITool.create({
      data: {
        id: 'github-copilot',
        name: 'GitHub Copilot',
        type: 'ide',
        description: 'Asistente de programación de GitHub',
        website: 'https://github.com/features/copilot',
        isActive: true
      }
    }),
    // CLI
    prisma.aITool.create({
      data: {
        id: 'claude-code',
        name: 'Claude Code',
        type: 'cli',
        description: 'Claude optimizado para desarrollo',
        isActive: true
      }
    }),
    // Generative
    prisma.aITool.create({
      data: {
        id: 'midjourney',
        name: 'Midjourney',
        type: 'generative',
        description: 'Generación de imágenes artísticas con IA',
        website: 'https://midjourney.com',
        isActive: true
      }
    }),
    prisma.aITool.create({
      data: {
        id: 'dalle',
        name: 'DALL-E',
        type: 'generative',
        description: 'Generación de imágenes de OpenAI',
        isActive: true
      }
    }),
    // Specialized
    prisma.aITool.create({
      data: {
        id: 'notion-ai',
        name: 'Notion AI',
        type: 'specialized',
        description: 'Asistente de escritura integrado en Notion',
        website: 'https://notion.so',
        isActive: true
      }
    })
  ]);

  // Crear categorías
  const categories = await Promise.all([
    prisma.category.create({
      data: {
        id: 'cat1',
        name: 'Programadores',
        emoji: '💻',
        description: 'Prompts para desarrollo de software y tecnología',
        promptCount: 2891
      }
    }),
    prisma.category.create({
      data: {
        id: 'cat2',
        name: 'Cineastas',
        emoji: '🎬',
        description: 'Prompts para creación audiovisual y narrativa',
        promptCount: 1240
      }
    }),
    prisma.category.create({
      data: {
        id: 'cat3',
        name: 'Marketers',
        emoji: '📈',
        description: 'Prompts para marketing digital y crecimiento',
        promptCount: 1567
      }
    }),
    prisma.category.create({
      data: {
        id: 'cat4',
        name: 'Diseñadores',
        emoji: '🎨',
        description: 'Prompts para diseño visual y creativo',
        promptCount: 983
      }
    }),
    prisma.category.create({
      data: {
        id: 'cat5',
        name: 'Consultores',
        emoji: '🏢',
        description: 'Prompts para consultoría empresarial y análisis',
        promptCount: 756
      }
    }),
    prisma.category.create({
      data: {
        id: 'cat6',
        name: 'Educadores',
        emoji: '🎓',
        description: 'Prompts para educación y formación académica',
        promptCount: 645
      }
    })
  ]);

  // Crear subcategorías
  const subcategories = await Promise.all([
    // Programadores
    prisma.subcategory.create({
      data: {
        id: 'frontend',
        name: 'Frontend',
        categoryId: 'cat1',
        description: 'React, Vue, Angular, HTML/CSS',
        promptCount: 892
      }
    }),
    prisma.subcategory.create({
      data: {
        id: 'backend',
        name: 'Backend',
        categoryId: 'cat1',
        description: 'APIs, bases de datos, servidores',
        promptCount: 756
      }
    }),
    prisma.subcategory.create({
      data: {
        id: 'mobile',
        name: 'Móvil',
        categoryId: 'cat1',
        description: 'React Native, Flutter, Swift',
        promptCount: 445
      }
    }),
    prisma.subcategory.create({
      data: {
        id: 'devops',
        name: 'DevOps',
        categoryId: 'cat1',
        description: 'CI/CD, Docker, AWS, deployment',
        promptCount: 298
      }
    }),
    // Cineastas
    prisma.subcategory.create({
      data: {
        id: 'guiones',
        name: 'Guiones',
        categoryId: 'cat2',
        description: 'Escritura de guiones y narrativa',
        promptCount: 456
      }
    }),
    prisma.subcategory.create({
      data: {
        id: 'storyboards',
        name: 'Storyboards',
        categoryId: 'cat2',
        description: 'Conceptos visuales y storyboards',
        promptCount: 234
      }
    }),
    prisma.subcategory.create({
      data: {
        id: 'dialogos',
        name: 'Diálogos',
        categoryId: 'cat2',
        description: 'Creación de diálogos y personajes',
        promptCount: 189
      }
    }),
    // Marketers
    prisma.subcategory.create({
      data: {
        id: 'copywriting',
        name: 'Copywriting',
        categoryId: 'cat3',
        description: 'Textos publicitarios y ventas',
        promptCount: 567
      }
    }),
    prisma.subcategory.create({
      data: {
        id: 'social-media',
        name: 'Redes Sociales',
        categoryId: 'cat3',
        description: 'Contenido para redes sociales',
        promptCount: 445
      }
    }),
    prisma.subcategory.create({
      data: {
        id: 'email',
        name: 'Email Marketing',
        categoryId: 'cat3',
        description: 'Campañas de email y newsletters',
        promptCount: 234
      }
    }),
    // Diseñadores
    prisma.subcategory.create({
      data: {
        id: 'grafico',
        name: 'Diseño Gráfico',
        categoryId: 'cat4',
        description: 'Logos, branding, identidad visual',
        promptCount: 345
      }
    }),
    prisma.subcategory.create({
      data: {
        id: 'ilustracion',
        name: 'Ilustración',
        categoryId: 'cat4',
        description: 'Arte digital e ilustraciones',
        promptCount: 278
      }
    }),
    prisma.subcategory.create({
      data: {
        id: 'fotografia',
        name: 'Fotografía',
        categoryId: 'cat4',
        description: 'Conceptos fotográficos y edición',
        promptCount: 189
      }
    }),
    // Consultores
    prisma.subcategory.create({
      data: {
        id: 'business',
        name: 'Business Intelligence',
        categoryId: 'cat5',
        description: 'Análisis de negocio y datos',
        promptCount: 234
      }
    }),
    // Educadores
    prisma.subcategory.create({
      data: {
        id: 'contenido',
        name: 'Contenido Educativo',
        categoryId: 'cat6',
        description: 'Material didáctico y lecciones',
        promptCount: 234
      }
    })
  ]);

  // Crear prompts
  const prompts = await Promise.all([
    // Prompt 1 - React
    prisma.prompt.create({
      data: {
        id: 'prompt1',
        title: 'Generador de Componentes React',
        description: 'Crea componentes React modernos con TypeScript y Tailwind CSS',
        content: `You are an expert React developer. Create a [COMPONENT_TYPE] component that:

Requirements:
- Uses TypeScript with proper type definitions
- Implements Tailwind CSS for styling
- Follows React best practices and hooks
- Includes proper accessibility attributes
- Is responsive and mobile-friendly
- Uses modern ES6+ syntax

Component specifications:
- Name: [COMPONENT_NAME]
- Props: [COMPONENT_PROPS]
- Functionality: [COMPONENT_FUNCTIONALITY]
- Styling: [STYLING_REQUIREMENTS]

Please provide:
1. Complete component code
2. Type definitions
3. Usage example
4. Basic unit tests with Jest/React Testing Library

Make sure the component is production-ready and follows current React patterns.`,
        preview: 'Crea un componente de navegación responsivo con...',
        categoryId: 'cat1',
        subcategoryId: 'frontend',
        aiToolId: 'claude-code',
        authorId: 'user1',
        isPublic: true,
        isPremium: false,
        tags: ['react', 'typescript', 'tailwind', 'componente', 'frontend'],
        likes: 342,
        copies: 1205,
        views: 3421,
        createdAt: new Date('2024-11-15'),
        updatedAt: new Date('2024-11-20')
      }
    }),

    // Prompt 2 - Cinematic
    prisma.prompt.create({
      data: {
        id: 'prompt2',
        title: 'Escena Cinematográfica Detallada',
        description: 'Genera descripciones de escenas para guiones profesionales',
        content: `You are a professional screenwriter and director. Create a vivid, cinematic scene description for:

Scene Context:
- Genre: [GENRE]
- Mood/Tone: [MOOD]
- Location: [LOCATION]
- Time: [TIME_OF_DAY]
- Characters: [CHARACTERS]
- Key Action: [MAIN_ACTION]

Requirements:
- Write in proper screenplay format
- Include specific visual details
- Describe camera movements and angles
- Add sound/audio cues
- Establish atmosphere and mood
- Keep dialogue natural and character-driven
- Length: [SCENE_LENGTH]

Format:
FADE IN:
EXT./INT. LOCATION - TIME

[Scene description with proper formatting]

CHARACTER
(parenthetical if needed)
Dialogue here.

Make the scene feel cinematic and engaging, with clear visual storytelling that would translate well to screen.`,
        preview: 'Describe una confrontación tensa en un callejón...',
        categoryId: 'cat2',
        subcategoryId: 'guiones',
        aiToolId: 'chatgpt',
        authorId: 'user2',
        isPublic: true,
        isPremium: false,
        tags: ['guion', 'escena', 'dialogo', 'cinematico', 'script'],
        likes: 198,
        copies: 456,
        views: 1234,
        createdAt: new Date('2024-11-10'),
        updatedAt: new Date('2024-11-18')
      }
    }),

    // Prompt 3 - Marketing
    prisma.prompt.create({
      data: {
        id: 'prompt3',
        title: 'Framework de Copy AIDA',
        description: 'Crear copy persuasivo usando la fórmula AIDA probada',
        content: `You are a direct response copywriter. Create compelling marketing copy using the AIDA framework:

Product/Service: [PRODUCT_NAME]
Target Audience: [TARGET_AUDIENCE]
Key Benefit: [MAIN_BENEFIT]
Call to Action: [CTA]

AIDA Framework:

**ATTENTION** - Hook that stops the scroll
- Use curiosity, urgency, or bold claims
- Address pain points or desires
- Make it specific to [TARGET_AUDIENCE]

**INTEREST** - Build engagement and relevance  
- Explain the problem/opportunity
- Position your solution
- Use social proof or statistics

**DESIRE** - Create want and urgency
- List key benefits (not features)
- Use emotional triggers
- Include testimonials or case studies
- Address objections

**ACTION** - Clear, compelling CTA
- Remove friction
- Create urgency
- Offer guarantee or bonus

Requirements:
- Length: [COPY_LENGTH]
- Platform: [PLATFORM]
- Tone: [BRAND_TONE]
- Include emotional triggers
- A/B test variations

Provide 2-3 variations of the complete copy.`,
        preview: 'Escribe títulos que capten atención y conviertan...',
        categoryId: 'cat3',
        subcategoryId: 'copywriting',
        aiToolId: 'claude',
        authorId: 'user3',
        isPublic: true,
        isPremium: false,
        tags: ['copywriting', 'marketing', 'aida', 'ventas', 'conversion'],
        likes: 278,
        copies: 892,
        views: 2156,
        createdAt: new Date('2024-11-12'),
        updatedAt: new Date('2024-11-19')
      }
    })
  ]);

  console.log('✅ Seed completo!');
  console.log(`Created ${users.length} users`);
  console.log(`Created ${aiTools.length} AI tools`);
  console.log(`Created ${categories.length} categories`);
  console.log(`Created ${subcategories.length} subcategories`);
  console.log(`Created ${prompts.length} prompts`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });