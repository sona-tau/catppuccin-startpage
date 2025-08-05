// User configuration for the startpage - update the palette, location, and your preferred tabs, categories, and links

// Define preferred palette for light and dark mode
// Available themes: latte, frappe, mocha, macchiato
const preferredLightTheme = latte;
const preferredDarkTheme = macchiato;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
	overrideStorage: true,
	temperature: {
		location: "Puerto Rico",
		scale: "F",
	},
	clock: {
		format: "k:i p",
		icon_color: palette.maroon,
	},
	additionalClocks: [
		{
			label: "UA",
			timezone: "Europe/Kyiv",
			format: "h:i",
			icon_color: palette.peach,
		},
	],
	search: {
		engines: {
			d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
		},
		default: "d",
	},
	keybindings: {
		"s": "search-bar",
	},
	disabled: [],
	localIcons: true,
	localFonts: true,
	fastlink: "https://stau.space",
	openLastVisitedTab: true,
	tabs: [
		{
			name: "myself",
			background_url: "src/img/banners/banner_04.gif",
			categories: [
				{
					name: "bookmarks",
					links: [
						{
							name: "poolsuite",
							url: "https://poolsuite.net/",
							icon: "pool",
							icon_color: palette.green,
						},
						{
							name: "musicForProgramming();",
							url: "https://musicforprogramming.net",
							icon: "binary-tree",
							icon_color: palette.peach,
						},
            {
              name: "listen.moe",
              url: "https://listen.moe/",
              icon: "torii",
              icon_color: palette.blue,
            },
            {
              name: "spotify",
              url: "https://open.spotify.com",
              icon: "brand-spotify",
              icon_color: palette.mauve,
            },
					],
				},
				{
					name: "workspace",
					links: [
						{
							name: "proton",
							url: "https://mail.proton.me/u/0/inbox",
							icon: "atom",
							icon_color: palette.green,
						},
						{
							name: "calendar",
							url: "https://calendar.proton.me/",
							icon: "calendar-filled",
							icon_color: palette.peach,
						},
						{
							name: "miupi",
							url: "https://miupi.uprrp.edu",
							icon: "books",
							icon_color: palette.red,
						},
						{
							name: "moodle",
							url: "https://online.uprrp.edu",
							icon: "school",
							icon_color: palette.blue,
						},
					],
				},
				{
					name: "media",
					links: [
						{
							name: "WhatsApp",
							url: "https://web.whatsapp.com",
							icon: "brand-whatsapp",
							icon_color: palette.green,
						},
						{
							name: "toki.social",
							url: "https://toki.social",
							icon: "brand-mastodon",
							icon_color: palette.peach,
						},
						{
							name: "Twitter",
							url: "https://kutok.io",
							icon: "brand-twitter",
							icon_color: palette.red,
						},
						{
              name: "discord",
							url: "https://dircord.com",
							icon: "brand-discord",
							icon_color: palette.blue,
						},
						{
							name: "中日新聞",
							url: "https://www.chunichi.co.jp/",
							icon: "news",
							icon_color: palette.mauve,
						},
					],
				},
			],
		},
		{
			name: "dev",
			background_url: "src/img/banners/banner_02.gif",
			categories: [
				{
					name: "development",
					links: [
						{
							name: "git",
							url: "https://git.gay",
							icon: "git-branch",
							icon_color: palette.green,
						},
						{
							name: "github",
							url: "https://github.com",
							icon: "brand-github",
							icon_color: palette.peach,
						},
						{
							name: "stackoverflow",
							url: "https://stackoverflow.com",
							icon: "brand-stackoverflow",
							icon_color: palette.red,
						},
					],
				},
				{
					name: "challenges",
					links: [
						{
							name: "codeforces",
							url: "https://codeforces.com",
							icon: "brain",
							icon_color: palette.green,
						},
						{
							name: "leetcode",
							url: "https://leetcode.com",
							icon: "brand-leetcode",
							icon_color: palette.peach,
						},
						{
							name: "HackerRank",
							url: "https://hackerrank.com",
							icon: "lambda",
							icon_color: palette.red,
						},
						{
							name: "aoc",
							url: "https://adventofcode.com",
							icon: "brand-linktree",
							icon_color: palette.blue,
						},
					],
				},
				{
					name: "resources",
					links: [
						{
							name: "cppreference",
							url: "https://cppreference.com",
							icon: "brand-cpp",
							icon_color: palette.green,
						},
						{
							name: "hoogle",
							url: "https://hoogle.haskell.org",
							icon: "math-function",
							icon_color: palette.peach,
						},
						{
							name: "rust docs",
							url: "https://doc.rust-lang.org/std/",
							icon: "file-type-rs",
							icon_color: palette.red,
						},
					],
				},
			],
		},
		{
			name: "chi ll",
			background_url: "src/img/banners/banner_08.gif",
			categories: [
				{
					name: "social media",
					links: [
						{
							name: "YouTube",
							url: "https://youtube.com",
							icon: "brand-youtube",
							icon_color: palette.green,
						},
						{
							name: "BMK",
							url: "https://bmk.neocities.org/",
							icon: "relation-one-to-many",
							icon_color: palette.peach,
						},
						{
							name: "hackernews",
							url: "https://news.ycombinator.com",
							icon: "brand-redhat",
							icon_color: palette.red,
						},
					],
				},
				{
					name: "gaming",
					links: [
						{
							name: "osu!",
							url: "https://osu.ppy.sh",
							icon: "route",
							icon_color: palette.green,
						},
						{
							name: "steam",
							url: "https://store.steampowered.com",
							icon: "brand-steam",
							icon_color: palette.peach,
						},
						{
							name: "GGST",
							url: "https://guiltygear.fandom.com/wiki/Guilty_Gear_Wiki",
							icon: "karate",
							icon_color: palette.red,
						},
						{
							name: "stardew",
							url: "https://stardewvalley.fandom.com/wiki/Stardew_Valley_Wiki",
							icon: "plant",
							icon_color: palette.blue,
						},
            {
              name: "webfishing",
              url: "https://webfishing.wiki.gg/",
              icon: "fish",
              icon_color: palette.mauve,
            },
					],
				},
				{
					name: "video",
					links: [
						{
							name: "anilist",
							url: "https://anilist.co/home",
							icon: "brand-funimation",
							icon_color: palette.green,
						},
						{
							name: "youtube",
							url: "https://www.youtube.com",
							icon: "brand-youtube",
							icon_color: palette.peach,
						},
						{
							name: "crunchyroll",
							url: "https://crunchyroll.com",
							icon: "brand-funimation",
							icon_color: palette.red,
						},
						{
							name: "anichart",
							url: "https://anichart.net/Summer-2025",
							icon: "star-filled",
							icon_color: palette.blue,
						},
					],
				},
			],
		},
	],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
