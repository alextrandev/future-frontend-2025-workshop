/* eslint-disable no-console */
import { PrismaClient } from '@prisma/client';
import type { User } from '@prisma/client';

const prisma = new PrismaClient();

const CONTACTS = [
  {
    avatar: 'https://static.wixstatic.com/media/52610a_bb2fa020899247c5af44d1a819f0b65c~mv2.png',
    email: 'renoir@expedition33.com',
    favorite: false,
    first: 'Renoir',
    github: 'renoir-exp33',
    id: 'e5555555-6666-7777-8888-999999999999',
    last: '',
    notes: 'Renoir is the expedition’s skilled negotiator and art connoisseur, adept at brokering deals and uncovering secrets hidden in ancient works.',
    position: 'Negotiator / Art Connoisseur',
  },
  {
    avatar: 'https://static.wixstatic.com/media/52610a_549edd34a6334553b74ade3490813210~mv2.webp',
    email: 'verso@expedition33.com',
    favorite: false,
    first: 'Verso',
    github: 'verso-exp33',
    id: 'f6666666-7777-8888-9999-000000000000',
    last: '',
    notes: 'Verso serves as the expedition’s historian and researcher, deciphering ancient manuscripts to guide the team through uncharted territories.',
    position: 'Historian / Researcher',
  },
  {
    avatar: 'https://static.wixstatic.com/media/98aef2_bc19f6a72662456597378693df9762d2~mv2.png',
    email: 'gustave@expedition33.com',
    favorite: true,
    first: 'Gustave',
    github: 'gustave-exp33',
    id: 'a1111111-2222-3333-4444-555555555555',
    last: '',
    notes: 'Gustave grew up feeling suffocated by the Paintress’ presence over Lumière. As an engineer, he dedicated his life to the city’s defence and agriculture. Now, as an Expeditioner, he devotes his final year to defeating the Paintress and reclaiming a future for Lumière’s children.',
    position: 'Engineer / Expeditioner',
  },
  {
    avatar: 'https://static.wixstatic.com/media/98aef2_2fffb59e031d45178418fe768cf49059~mv2.png',
    email: 'maelle@expedition33.com',
    favorite: false,
    first: 'Maelle',
    github: 'maelle-exp33',
    id: 'b2222222-3333-4444-5555-666666666666',
    last: '',
    notes: 'Maelle is the team’s botanist and healer, using her deep knowledge of Lumière’s flora to support and protect her companions in their quest.',
    position: 'Botanist / Healer',
  },
  {
    avatar: 'https://static.wixstatic.com/media/98aef2_a4e45142853b44f192f94f050a15131c~mv2.png',
    email: 'lune@expedition33.com',
    favorite: false,
    first: 'Lune',
    github: 'lune-exp33',
    id: 'c3333333-4444-5555-6666-777777777777',
    last: '',
    notes: 'Lune serves as the expedition’s scout and tracker, whose keen senses guide the team through the wilds and warn them of hidden dangers.',
    position: 'Scout / Tracker',
  },
  {
    avatar: 'https://static.wixstatic.com/media/98aef2_d1d1d36ea6174b5a9f1dd2bb1bbe9ed5~mv2.png',
    email: 'sciel@expedition33.com',
    favorite: false,
    first: 'Sciel',
    github: 'sciel-exp33',
    id: 'd4444444-5555-6666-7777-888888888888',
    last: '',
    notes: 'Sciel is a talented tactician and covert operative, striking from the shadows to protect the group and outmaneuver enemy forces.',
    position: 'Assassin / Tactician',
  }
];

const USERS: User[] = [
  {
    id: '2bccacd4-64de-4f1d-97ed-9722cdf99cd9',
    name: 'Jane Doe',
  },
  {
    id: '3ea4ae6c-adda-40eb-b254-9cfe0c8e8113',
    name: 'John Doe',
  },
];

const MESSAGES = [
  {
    contactId: '1cd89022-64e8-4a76-aec6-43433478e32f',
    content: 'Hello, how are you doing?',
    createdById: '3ea4ae6c-adda-40eb-b254-9cfe0c8e8113',
  },
  {
    contactId: '0649cf60-ab42-4309-aaff-38c5677653d4',
    content: 'Hi, how are you!',
    createdById: '2bccacd4-64de-4f1d-97ed-9722cdf99cd9',
  },
  {
    contactId: '2b3b3b3b-64e8-4a76-aec6-43433478e32f',
    content: 'Hello :)',
    createdById: '2bccacd4-64de-4f1d-97ed-9722cdf99cd9',
  },
];

async function seed() {
  await Promise.all(
    CONTACTS.map(contact => {
      return prisma.contact.create({
        data: {
          avatar: contact.avatar,
          email: contact.email,
          favorite: contact.favorite,
          first: contact.first,
          github: contact.github,
          id: contact.id,
          last: contact.last,
          notes: contact.notes,
          position: contact.position,
        },
      });
    }),
  )
    .then(() => {
      return console.info('[SEED] Successfully create contact records');
    })
    .catch(e => {
      return console.error('[SEED] Failed to create contact records', e);
    });

  await Promise.all(
    USERS.map(user => {
      return prisma.user.create({ data: { id: user.id, name: user.name } });
    }),
  )
    .then(() => {
      return console.info('[SEED] Successfully create user records');
    })
    .catch(e => {
      return console.error('[SEED] Failed to create user records', e);
    });

  await Promise.all(
    MESSAGES.map(message => {
      return prisma.message.create({
        data: {
          contactId: message.contactId,
          content: message.content,
          createdById: message.createdById,
        },
      });
    }),
  )
    .then(() => {
      return console.info('[SEED] Successfully create message records');
    })
    .catch(e => {
      return console.error('[SEED] Failed to create message records', e);
    });
}

seed();
