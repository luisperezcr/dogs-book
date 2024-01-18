import { Injectable } from '@angular/core';

export interface Dog {
  name: string;
  breed: string;
  description: string;
  shortDescription: string;
  photoUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class DogsBookService {
  dogs: Dog[] = [
    {
      name: 'Jax',
      breed: 'Belgian Malinois',
      shortDescription: 'The smart, confident, and versatile Belgian Malinois is a world-class worker who forges an unbreakable bond with his human partner.',
      description: 'The smart, confident, and versatile Belgian Malinois is a world-class worker who forges an unbreakable bond with his human partner. To deny a Mal activity and the pleasure of your company is to deprive him of his very reasons for being. Belgian Malinois are squarely built, proud, and alert herders standing 22 to 26 inches. Strong and well-muscled, but more elegant than bulky, there\'s an honest, no-frills look about them, as befit dogs built to work hard for their feed. A breed hallmark is the proud carriage of the head. Coat colors range from a rich fawn to mahogany. The black ears and mask accentuate bright, questioning eyes the color of dark Belgian chocolate. If you have ever seen a Mal perform an obedience routine, you know firsthand what a smart and eager breed this is. Problems set in, though, when this people-oriented dog is underemployed and neglected. Exercise, and plenty of it, preferably side by side with their adored owner, is key to Mal happiness.',
      photoUrl: '/assets/belgian-malinois.jpg'
    },
    {
      name: 'Ozzy',
      breed: 'German Shepherd',
      shortDescription: 'Generally considered dogkind\'s finest all-purpose worker, the German Shepherd Dog is a large, agile, muscular dog of noble character and high intelligence.',
      description: 'Generally considered dogkind\'s finest all-purpose worker, the German Shepherd Dog is a large, agile, muscular dog of noble character and high intelligence. Loyal, confident, courageous, and steady, the German Shepherd is truly a dog lover\'s delight. German Shepherd Dogs can stand as high as 26 inches at the shoulder and, when viewed in outline, presents a picture of smooth, graceful curves rather than angles. The natural gait is a free-and-easy trot, but they can turn it up a notch or two and reach great speeds. There are many reasons why German Shepherds stand in the front rank of canine royalty, but experts say their defining attribute is character: loyalty, courage, confidence, the ability to learn commands for many tasks, and the willingness to put their life on the line in defense of loved ones. German Shepherds will be gentle family pets and steadfast guardians, but, the breed standard says, there\'s a \'certain aloofness that does not lend itself to immediate and indiscriminate friendships.\'',
      photoUrl: '/assets/german-shepherd.jpg'
    },
    {
      name: 'Milo',
      breed: 'Golden Retriever',
      shortDescription: 'The Golden Retriever, an exuberant Scottish gundog of great beauty, stands among America\'s most popular dog breeds.',
      description: 'The Golden Retriever, an exuberant Scottish gundog of great beauty, stands among America\'s most popular dog breeds. They are serious workers at hunting and field work, as guides for the blind, and in search-and-rescue, enjoy obedience and other competitive events, and have an endearing love of life when not at work. The Golden Retriever is a sturdy, muscular dog of medium size, famous for the dense, lustrous coat of gold that gives the breed its name. The broad head, with its friendly and intelligent eyes, short ears, and straight muzzle, is a breed hallmark. In motion, Goldens move with a smooth, powerful gait, and the feathery tail is carried, as breed fanciers say, with a \'merry action.\' The most complete records of the development of the Golden Retriever are included in the record books that were kept from 1835 until about 1890 by the gamekeepers at the Guisachan (pronounced Gooeesicun) estate of Lord Tweedmouth at Inverness-Shire, Scotland. These records were released to public notice in Country Life in 1952, when Lord Tweedmouth\'s great-nephew, the sixth Earl of Ilchester, historian and sportsman, published material that had been left by his ancestor. They provided factual confirmation to the stories that had been handed down through generations. Goldens are outgoing, trustworthy, and eager-to-please family dogs, and relatively easy to train. They take a joyous and playful approach to life and maintain this puppyish behavior into adulthood. These energetic, powerful gundogs enjoy outdoor play. For a breed built to retrieve waterfowl for hours on end, swimming and fetching are natural pastimes.  ',
      photoUrl: '/assets/golden-retriever.jpg'
    },
    {
      name: 'Amber',
      breed: 'Labrador Retriever',
      shortDescription: 'The sweet-faced, lovable Labrador Retriever is one of America\'s most popular dog breeds, year after year.',
      description: 'The sweet-faced, lovable Labrador Retriever is one of America\'s most popular dog breeds, year after year. Labs are friendly, outgoing, and high-spirited companions who have more than enough affection to go around for a family looking for a medium-to-large dog.\n' +
        '\n' +
        'The sturdy, well-balanced Labrador Retriever can, depending on the sex, stand from 21.5 to 24.5 inches at the shoulder and weigh between 55 to 80 pounds. The dense, hard coat comes in yellow, black, and a luscious chocolate. The head is wide, the eyes glimmer with kindliness, and the thick, tapering \'otter tail\' seems to be forever signaling the breed\'s innate eagerness. Labs are famously friendly. They are companionable housemates who bond with the whole family, and they socialize well with neighbor dogs and humans alike. But don\'t mistake his easygoing personality for low energy: The Lab is an enthusiastic athlete that requires lots of exercise, like swimming and marathon games of fetch, to keep physically and mentally fit.',
      photoUrl: '/assets/labrador.jpg'
    },
    {
      name: 'Jack',
      breed: 'Mountain Bernese',
      shortDescription: 'Big, powerful, and built for hard work, the Bernese Mountain Dog is also strikingly beautiful and blessed with a sweet, affectionate nature.',
      description: 'Big, powerful, and built for hard work, the Bernese Mountain Dog is also strikingly beautiful and blessed with a sweet, affectionate nature. Berners are generally placid but are always up for a romp with the owner, whom they live to please. The Bernese Mountain Dog is a large, sturdy worker who can stand over 27 inches at the shoulder. The thick, silky, and moderately long coat is tricolored: jet black, clear white, and rust. The distinctive markings on the coat and face are breed hallmarks and, combined with the intelligent gleam in the dark eyes, add to the Berner\'s aura of majestic nobility. A hardy dog who thrives in cold weather, the Berner\'s brain and brawn helped him multitask on the farms and pastures of Switzerland. Berners get along with the entire family and are particularly gentle with children, but they will often become more attached to one lucky human. Berners are imposing but not threatening, and they maintain an aloof dignity with strangers.',
      photoUrl: '/assets/mountain-bernese.jpg'
    },
    {
      name: 'Luka',
      breed: 'Siberian Husky',
      shortDescription: 'Siberian Husky, a thickly coated, compact sled dog of medium size and great endurance, was developed to work in packs, pulling light loads at moderate speeds over vast frozen expanses. Sibes are friendly, fastidious, and dignified. ',
      description: 'Siberian Husky, a thickly coated, compact sled dog of medium size and great endurance, was developed to work in packs, pulling light loads at moderate speeds over vast frozen expanses. Sibes are friendly, fastidious, and dignified. The graceful, medium-sized Siberian Husky\'s almond-shaped eyes can be either brown or blue\'¿and sometimes one of each\'¿and convey a keen but amiable and even mischievous expression. Quick and nimble-footed, Siberians are known for their powerful but seemingly effortless gait. Tipping the scales at no more than 60 pounds, they are noticeably smaller and lighter than their burly cousin, the Alaskan Malamute. As born pack dogs, they enjoy family life and get on well with other dogs. The Sibe\'s innate friendliness render them indifferent watchdogs. These are energetic dogs who can\'t resist chasing small animals, so secure running room is a must. An attractive feature of the breed: Sibes are naturally clean, with little doggy odor.',
      photoUrl: '/assets/siberian-husky.jpg'
    }
  ];

  constructor() { }
}
