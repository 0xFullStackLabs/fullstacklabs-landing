export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Full Stack Labs",
	description: "Make DAO websites regardless of your design experience.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Books",
			href: "/books",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Blog",
			href: "/blog",
		},
		{
			label: "About",
			href: "/about",
		}
	],
	navMenuItems: [
		{
			label: "Books",
			href: "/books",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Blog",
			href: "/blog",
		},
		{
			label: "About",
			href: "/about",
		}
	],
	links: {
		github: "https://github.com/0xFullStackLabs",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
		sponsor: "https://patreon.com/jrgarciadev"
	},
};
