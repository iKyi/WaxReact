interface ISocialmediaLinkItem {
  url: string,
  icon: string,
  name: string,
}

const SocialMediaLinks: ISocialmediaLinkItem[] = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/ArenaWax',
    icon: 'twitter'
  },
  {
    name: 'Discord',
    url: "https://discord.gg/wJw4ZPpRpw",
    icon: 'discord'
  }, {
    name: 'Telegram',
    url: 'https://t.me/WAXArenaGame',
    icon: 'telegram'
  }
];

export default SocialMediaLinks;