if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let n={};const o=e=>i(e,r),t={module:{uri:r},exports:n,require:o};s[r]=Promise.all(a.map((e=>t[e]||o(e)))).then((e=>(c(...e),n)))}}define(["./workbox-7028bf80"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"4bce76d4e58010c3eab599d86f992628"},{url:"/_next/static/NjnlSY3nCCDrGRNBhFQ3r/_buildManifest.js",revision:"281ccd6ee3804961a3162b78c47d6d38"},{url:"/_next/static/NjnlSY3nCCDrGRNBhFQ3r/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1120.574652b031aa3304.js",revision:"574652b031aa3304"},{url:"/_next/static/chunks/1287.f99ba91cb20160fa.js",revision:"f99ba91cb20160fa"},{url:"/_next/static/chunks/1735-d1b5ede2cd395c7c.js",revision:"NjnlSY3nCCDrGRNBhFQ3r"},{url:"/_next/static/chunks/1923.a2ba4a13022866ed.js",revision:"a2ba4a13022866ed"},{url:"/_next/static/chunks/1949.5dfdb1a8febabdb4.js",revision:"5dfdb1a8febabdb4"},{url:"/_next/static/chunks/200-9b75640cc8ccf1bc.js",revision:"NjnlSY3nCCDrGRNBhFQ3r"},{url:"/_next/static/chunks/2099.6920b6cebe95bceb.js",revision:"6920b6cebe95bceb"},{url:"/_next/static/chunks/2175.3cc2869ed01e136e.js",revision:"3cc2869ed01e136e"},{url:"/_next/static/chunks/2337.1e4ee5b69f1c756a.js",revision:"1e4ee5b69f1c756a"},{url:"/_next/static/chunks/2470.7136fc31bffe7f42.js",revision:"7136fc31bffe7f42"},{url:"/_next/static/chunks/2562.7d252c63c2dea210.js",revision:"7d252c63c2dea210"},{url:"/_next/static/chunks/2691.283ca0678f85aac1.js",revision:"283ca0678f85aac1"},{url:"/_next/static/chunks/2736.3e1048d8273d7f46.js",revision:"3e1048d8273d7f46"},{url:"/_next/static/chunks/2849.1db360a354f8e0c4.js",revision:"1db360a354f8e0c4"},{url:"/_next/static/chunks/3115.9c0ff9e1ccc79b6f.js",revision:"9c0ff9e1ccc79b6f"},{url:"/_next/static/chunks/3418.c86dc6b96004b5b0.js",revision:"c86dc6b96004b5b0"},{url:"/_next/static/chunks/3460.22117a6d32d2f4e1.js",revision:"22117a6d32d2f4e1"},{url:"/_next/static/chunks/3545.ae72ba124a5904bd.js",revision:"ae72ba124a5904bd"},{url:"/_next/static/chunks/3627.7297a6e4229f689b.js",revision:"7297a6e4229f689b"},{url:"/_next/static/chunks/3784-c4d35ec7bfcc00e8.js",revision:"NjnlSY3nCCDrGRNBhFQ3r"},{url:"/_next/static/chunks/3866-da4a3d686e088419.js",revision:"NjnlSY3nCCDrGRNBhFQ3r"},{url:"/_next/static/chunks/4064.5daa2af4501122f0.js",revision:"5daa2af4501122f0"},{url:"/_next/static/chunks/4292.6c841437fab37478.js",revision:"6c841437fab37478"},{url:"/_next/static/chunks/4406.71d5437f29e66ba7.js",revision:"71d5437f29e66ba7"},{url:"/_next/static/chunks/4714.8d624bd9c64f1241.js",revision:"8d624bd9c64f1241"},{url:"/_next/static/chunks/4804.e58a68d28d712452.js",revision:"e58a68d28d712452"},{url:"/_next/static/chunks/4869-d1a5463a7ee4d5c3.js",revision:"NjnlSY3nCCDrGRNBhFQ3r"},{url:"/_next/static/chunks/4887.bdc939553b4f0e6a.js",revision:"bdc939553b4f0e6a"},{url:"/_next/static/chunks/4992-440d8e150c9906a0.js",revision:"NjnlSY3nCCDrGRNBhFQ3r"},{url:"/_next/static/chunks/5008-72eaa6600a30cc11.js",revision:"NjnlSY3nCCDrGRNBhFQ3r"},{url:"/_next/static/chunks/5011.f696db6fc06a03fe.js",revision:"f696db6fc06a03fe"},{url:"/_next/static/chunks/5033.51808b271611410b.js",revision:"51808b271611410b"},{url:"/_next/static/chunks/5080.684056e5bee469de.js",revision:"684056e5bee469de"},{url:"/_next/static/chunks/544241ca-bb7e99a2f2cb8590.js",revision:"NjnlSY3nCCDrGRNBhFQ3r"},{url:"/_next/static/chunks/5666.8e03520c7fcc7de7.js",revision:"8e03520c7fcc7de7"},{url:"/_next/static/chunks/6051-43ffe5a0b5281223.js",revision:"NjnlSY3nCCDrGRNBhFQ3r"},{url:"/_next/static/chunks/6315.277f407e4a276cc2.js",revision:"277f407e4a276cc2"},{url:"/_next/static/chunks/6517.0cef4c4d01f8513e.js",revision:"0cef4c4d01f8513e"},{url:"/_next/static/chunks/685.4a71798e9d128bcb.js",revision:"4a71798e9d128bcb"},{url:"/_next/static/chunks/7022.5f6f7244bdd32ebb.js",revision:"5f6f7244bdd32ebb"},{url:"/_next/static/chunks/7190.856eed2ac04f84dc.js",revision:"856eed2ac04f84dc"},{url:"/_next/static/chunks/7257.1c3d2dd413cb994e.js",revision:"1c3d2dd413cb994e"},{url:"/_next/static/chunks/7773-bd5a10f3a86605fc.js",revision:"NjnlSY3nCCDrGRNBhFQ3r"},{url:"/_next/static/chunks/8252.9bb55a251cf1c283.js",revision:"9bb55a251cf1c283"},{url:"/_next/static/chunks/8481.1090db3eb1d3d993.js",revision:"1090db3eb1d3d993"},{url:"/_next/static/chunks/8760.41cb3b322b734b3c.js",revision:"41cb3b322b734b3c"},{url:"/_next/static/chunks/8777.bb3354757f88c574.js",revision:"bb3354757f88c574"},{url:"/_next/static/chunks/8950.c504b785dc2f024e.js",revision:"c504b785dc2f024e"},{url:"/_next/static/chunks/9129.c04e8f7585ff5528.js",revision:"c04e8f7585ff5528"},{url:"/_next/static/chunks/9301.8f63ea7b336f980d.js",revision:"8f63ea7b336f980d"},{url:"/_next/static/chunks/9691-cb7a45399ae94c21.js",revision:"NjnlSY3nCCDrGRNBhFQ3r"},{url:"/_next/static/chunks/9796.5c102cebea6a454d.js",revision:"5c102cebea6a454d"},{url:"/_next/static/chunks/9981-7098b7123cd6bde5.js",revision:"NjnlSY3nCCDrGRNBhFQ3r"},{url:"/_next/static/chunks/app/about/page-3d941c397c1664ed.js",revision:"NjnlSY3nCCDrGRNBhFQ3r"},{url:"/_next/static/chunks/app/blog/%5Bslug%5D/page-dd0e7cdc3328e3d5.js",revision:"NjnlSY3nCCDrGRNBhFQ3r"},{url:"/_next/static/chunks/app/blog/page-2024f2be30fb0d24.js",revision:"NjnlSY3nCCDrGRNBhFQ3r"},{url:"/_next/static/chunks/app/contact/page-c17424037311b067.js",revision:"NjnlSY3nCCDrGRNBhFQ3r"},{url:"/_next/static/chunks/app/layout-0d73d4c5eef208cb.js",revision:"NjnlSY3nCCDrGRNBhFQ3r"},{url:"/_next/static/chunks/app/page-f0a246f1f0f955b8.js",revision:"NjnlSY3nCCDrGRNBhFQ3r"},{url:"/_next/static/chunks/app/projects/%5Bslug%5D/page-cf962420a92b9fc8.js",revision:"NjnlSY3nCCDrGRNBhFQ3r"},{url:"/_next/static/chunks/app/projects/page-404081c47282eabb.js",revision:"NjnlSY3nCCDrGRNBhFQ3r"},{url:"/_next/static/chunks/framework-1b14094c1d20e16b.js",revision:"NjnlSY3nCCDrGRNBhFQ3r"},{url:"/_next/static/chunks/main-0ba01f24e9ee73a2.js",revision:"NjnlSY3nCCDrGRNBhFQ3r"},{url:"/_next/static/chunks/main-app-39b97b624b903c84.js",revision:"NjnlSY3nCCDrGRNBhFQ3r"},{url:"/_next/static/chunks/pages/_app-8e7624e5b0a8f4bb.js",revision:"NjnlSY3nCCDrGRNBhFQ3r"},{url:"/_next/static/chunks/pages/_error-d080c2699879dfbc.js",revision:"NjnlSY3nCCDrGRNBhFQ3r"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-52a6b50557c7777a.js",revision:"NjnlSY3nCCDrGRNBhFQ3r"},{url:"/_next/static/css/34d26d4cb0d91a51.css",revision:"34d26d4cb0d91a51"},{url:"/_next/static/css/4f15a3919f557431.css",revision:"4f15a3919f557431"},{url:"/_next/static/css/58ef5bdd56cd9e1b.css",revision:"58ef5bdd56cd9e1b"},{url:"/_next/static/css/6d11fc85bdbe305f.css",revision:"6d11fc85bdbe305f"},{url:"/_next/static/css/7b362a3e5617a6ef.css",revision:"7b362a3e5617a6ef"},{url:"/_next/static/css/9776948a8d0a2eaa.css",revision:"9776948a8d0a2eaa"},{url:"/_next/static/css/9c12ebe2f79263d2.css",revision:"9c12ebe2f79263d2"},{url:"/_next/static/css/dfbf79dcfefffd74.css",revision:"dfbf79dcfefffd74"},{url:"/_next/static/media/01d70f69f356a47b-s.p.woff2",revision:"bd588a8e9ebf688b14f7b90c25e475d9"},{url:"/_next/static/media/0f71564bb56b77d8-s.p.woff2",revision:"7c250b154223d810ea33e61a54ea44e9"},{url:"/_next/static/media/31c73c44c24fc197-s.p.woff2",revision:"c6c9cc5cf5101629a4138bb1b7edc046"},{url:"/_next/static/media/651c32496e72f9e4-s.p.woff2",revision:"e4ce5dc69ef1ff4e170a774a817fde6c"},{url:"/_next/static/media/a2990cb1060a7538-s.p.woff2",revision:"27efe7989fc51b3dcae329681d061245"},{url:"/_next/static/media/a55bf1c1ee84d5bc-s.p.otf",revision:"f463d09b7124be050fedc671ca627e12"},{url:"/_next/static/media/disappointed.75a8ec15.png",revision:"0d90c402cbd0f2c62d6de1df48d25abc"},{url:"/_next/static/media/gh-graph-dark.edb1d2d6.png",revision:"84721d99b0f943135e5b448b99a34674"},{url:"/_next/static/media/gh-graph-light.bde14f0f.png",revision:"a3056c0c24769f7ea9ce1db4c390e5ed"},{url:"/_next/static/media/have-an-idea.2c109f9c.png",revision:"12078ba3dc92d2b98713b2a150a6465a"},{url:"/_next/static/media/in-love.03dff7f1.png",revision:"49fcca533da58f18721f65cc00746f23"},{url:"/_next/static/media/surprised.dc87ebba.png",revision:"790054ade3077eb748571cff005636fc"},{url:"/_next/static/media/winking.6063fc4a.png",revision:"441cbadd1f10e269c46995a6a10ea820"},{url:"/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/favicon-16x16.png",revision:"07819994a6e14966c79bcf3cee1f5e37"},{url:"/favicon-32x32.png",revision:"3492638d19d87cffcf7d0a5e416ecf76"},{url:"/favicon-96x96.png",revision:"d68af3201c2fb69930e1907fc08e9c1a"},{url:"/favicon.ico",revision:"8a9913e4ec1321783885c49b736260a6"},{url:"/fonts/GT-Walsheim-Black.woff2",revision:"bd588a8e9ebf688b14f7b90c25e475d9"},{url:"/fonts/GT-Walsheim-Bold.woff2",revision:"7c250b154223d810ea33e61a54ea44e9"},{url:"/fonts/GT-Walsheim-Medium.woff2",revision:"27efe7989fc51b3dcae329681d061245"},{url:"/fonts/GT-Walsheim-Regular.woff2",revision:"c6c9cc5cf5101629a4138bb1b7edc046"},{url:"/fonts/Kenfolg.otf",revision:"f463d09b7124be050fedc671ca627e12"},{url:"/fonts/LeagueMono-Medium.woff2",revision:"9944453d46ba92dbedcc622a07367711"},{url:"/fonts/LeagueMono-Regular.woff2",revision:"e4ce5dc69ef1ff4e170a774a817fde6c"},{url:"/img/about.png",revision:"da7ffa6226eabcd82e851d77f866775a"},{url:"/img/authors/zagrodzki.jpg",revision:"7b4f6882e6c67b15fcd11041c3ef2b0a"},{url:"/img/avatars/disappointed.png",revision:"0d90c402cbd0f2c62d6de1df48d25abc"},{url:"/img/avatars/have-an-idea.png",revision:"12078ba3dc92d2b98713b2a150a6465a"},{url:"/img/avatars/in-love.png",revision:"49fcca533da58f18721f65cc00746f23"},{url:"/img/avatars/pissed-off.png",revision:"3a3be38f0afe5d996c3af60395488b85"},{url:"/img/avatars/surprised.png",revision:"790054ade3077eb748571cff005636fc"},{url:"/img/avatars/winking.png",revision:"441cbadd1f10e269c46995a6a10ea820"},{url:"/img/banner.png",revision:"4eb4a0160b299288fa484ae24f496d46"},{url:"/img/blog.png",revision:"ce79ee019519fe7c3bb10e615d075839"},{url:"/img/contact.png",revision:"bc020bc7b6e91ecce348cd4105b85b4a"},{url:"/img/gh-graph-dark.png",revision:"84721d99b0f943135e5b448b99a34674"},{url:"/img/gh-graph-light.png",revision:"a3056c0c24769f7ea9ce1db4c390e5ed"},{url:"/img/me.jpg",revision:"b97bab879a060d4c1be705606ecd1fbe"},{url:"/img/me.png",revision:"28bf800bf1a1118e27008e5df1613317"},{url:"/img/posts/10-ui-ux-tips-that-you-should-know-forms/autofocus.png",revision:"77595ad674029f849d7a54fff518bbf5"},{url:"/img/posts/10-ui-ux-tips-that-you-should-know-forms/errors.png",revision:"5484962866ccf3b0d6b798611bca5f52"},{url:"/img/posts/10-ui-ux-tips-that-you-should-know-forms/gift.png",revision:"8e32d632146f8336641430152068bdc5"},{url:"/img/posts/10-ui-ux-tips-that-you-should-know-forms/keep-it-simple.png",revision:"27ecb68086bdd2eb60080eb60b465d93"},{url:"/img/posts/10-ui-ux-tips-that-you-should-know-forms/mark-fields.png",revision:"d5b6827bc82d2d519243a7a0997dfbb4"},{url:"/img/posts/10-ui-ux-tips-that-you-should-know-forms/multi-step.png",revision:"86f5baace0a3476ef14f27e5bdd22612"},{url:"/img/posts/10-ui-ux-tips-that-you-should-know-forms/phone-number.gif",revision:"0c2c6383e9968c3d8e117a4fa684b114"},{url:"/img/posts/10-ui-ux-tips-that-you-should-know-forms/reset.png",revision:"676938709dba4ee6b96d56709ef64f74"},{url:"/img/posts/10-ui-ux-tips-that-you-should-know-forms/show-password.png",revision:"5e6abffd680a21ee789e50c62502ca9f"},{url:"/img/posts/10-ui-ux-tips-that-you-should-know-forms/thumbnail.jpg",revision:"36ebd7370f491fa81b54d3675a1aa13e"},{url:"/img/posts/10-ui-ux-tips-that-you-should-know-forms/types.png",revision:"7b2e866be456bf2594cea0e680e2b345"},{url:"/img/posts/10-ui-ux-tips-that-you-should-know-forms/z-pattern.png",revision:"eaa1edd4d9ab1fd36f331cae4af1ab02"},{url:"/img/posts/do-you-know-all-input-types/date-related.png",revision:"0a3c3b258fb3f811693b90b4a7ce37e5"},{url:"/img/posts/do-you-know-all-input-types/form-handling.png",revision:"d9c0f048e8bd057726e66a75bae3c8eb"},{url:"/img/posts/do-you-know-all-input-types/one-liners.png",revision:"8c73fdbb65e6608e031d785199be39f5"},{url:"/img/posts/do-you-know-all-input-types/special.png",revision:"bb109b7d9bc2f54d2431c8bd07248b09"},{url:"/img/posts/do-you-know-all-input-types/thumbnail.jpg",revision:"0abc9fee209767a77637ba1e626d5254"},{url:"/img/posts/how-i-built-my-personal-website/lighthouse-result.png",revision:"8bf04e04641de78dde4beb6018cbfd25"},{url:"/img/posts/how-i-built-my-personal-website/nextjs-analytics-result.png",revision:"124f880ea770712dfefe89b07851497a"},{url:"/img/posts/how-i-built-my-personal-website/open-source-developer-certificate.png",revision:"9731570fb695597d8d271937bb640606"},{url:"/img/posts/how-i-built-my-personal-website/post-image.jpg",revision:"12476bf9c3cc3760900b5bbeb9761316"},{url:"/img/posts/how-i-built-my-personal-website/thumbnail.jpg",revision:"fb17ea887738ec102945c7cb113d9c16"},{url:"/img/posts/learning-programming/community.webp",revision:"30df46a4f99a1d7128b33438737a89c7"},{url:"/img/posts/learning-programming/dunning-kruger.jpg",revision:"81046b1508f9b9e406808b77b08124fb"},{url:"/img/posts/learning-programming/graduation.webp",revision:"c7172bd628e6172f4e8c869fca13ca42"},{url:"/img/posts/learning-programming/motivation.webp",revision:"c89e03d508f49ea1527bdad2cad02479"},{url:"/img/posts/learning-programming/thumbnail.jpg",revision:"67ae3f228bdd16ae89c53e4d3c9ff66d"},{url:"/img/posts/remarkable-2-what-is-it-and-why-you-should-buy-it/apps.png",revision:"93a2647537fe025057d569f6aa0bad29"},{url:"/img/posts/remarkable-2-what-is-it-and-why-you-should-buy-it/back.jpg",revision:"bd57d313da6ecc88fd6d6f7cb55ca56f"},{url:"/img/posts/remarkable-2-what-is-it-and-why-you-should-buy-it/front.jpg",revision:"7c3dde31132395e79909ea4f5b598640"},{url:"/img/posts/remarkable-2-what-is-it-and-why-you-should-buy-it/kindle.png",revision:"f3a71422e490e22cfe65403af22fee8d"},{url:"/img/posts/remarkable-2-what-is-it-and-why-you-should-buy-it/new-connect.png",revision:"0ef18318a4f02094087ae57a3a606562"},{url:"/img/posts/remarkable-2-what-is-it-and-why-you-should-buy-it/notes.jpg",revision:"6a57a7d4747aa1849230a96df893a75d"},{url:"/img/posts/remarkable-2-what-is-it-and-why-you-should-buy-it/old-connect.png",revision:"b8da5ff6ac1fca6052900622da5b4e18"},{url:"/img/posts/remarkable-2-what-is-it-and-why-you-should-buy-it/price.png",revision:"c16f78a1da3533d5cbb0acace34b980a"},{url:"/img/posts/remarkable-2-what-is-it-and-why-you-should-buy-it/read-on-remarkable.png",revision:"7af720843f0519113f7bd987b2e28606"},{url:"/img/posts/remarkable-2-what-is-it-and-why-you-should-buy-it/storage.jpg",revision:"1ef081cfa04d369832d4ec622d962302"},{url:"/img/posts/remarkable-2-what-is-it-and-why-you-should-buy-it/templates.png",revision:"9ecd0e0602a379073ac86d8bc17e91b7"},{url:"/img/posts/remarkable-2-what-is-it-and-why-you-should-buy-it/thumbnail.jpg",revision:"07fc317cbab505bd7f8da51db9d92590"},{url:"/img/posts/using-clipboard-in-js/thumbnail.jpg",revision:"5444366129ea5d9d4cfb6529351e5de0"},{url:"/img/posts/why-you-should-use-floats-in-your-projects/complexity-chart.png",revision:"c9701651009cc709b0fecb6d7f32a7b6"},{url:"/img/posts/why-you-should-use-floats-in-your-projects/example-layout.png",revision:"b9a61f3734c4d88d907b4af91526d741"},{url:"/img/posts/why-you-should-use-floats-in-your-projects/flex-browser-support.png",revision:"a9e01bcbb93fe99fe9e1f615e1930032"},{url:"/img/posts/why-you-should-use-floats-in-your-projects/float-browser-support.png",revision:"ac857db2087eeb6c108294c641ca9a5b"},{url:"/img/posts/why-you-should-use-floats-in-your-projects/float-meme.png",revision:"339558a1b30276fd04642defe30230c3"},{url:"/img/posts/why-you-should-use-floats-in-your-projects/grid-browser-support.png",revision:"bd9fb1426c6e698ff815a2f3412a6da1"},{url:"/img/posts/why-you-should-use-floats-in-your-projects/thumbnail.jpg",revision:"842c141455b427091559262bc5fb54f2"},{url:"/img/projects.png",revision:"569aec442ef883a947c6e165747b2457"},{url:"/img/projects/animations/display.gif",revision:"ee1d73c0c468e070bf62c6d8eb2e15c0"},{url:"/img/projects/animations/preview.png",revision:"8f4c081c92e41d556df9c4522c81402f"},{url:"/img/projects/animations/stack-equation.png",revision:"06a62a7bebb3ba7464cd39b36ff529a4"},{url:"/img/projects/animations/thumbnail.png",revision:"d09b179177fee648e4fa5020da177edc"},{url:"/img/projects/blog/back.png",revision:"b3ef661ac56f4a42ae4a56306d5b79f5"},{url:"/img/projects/blog/mockup.png",revision:"bf4c50049ddf7e1197366d9019fe1d82"},{url:"/img/projects/blog/thumbnail.png",revision:"5a3347acc074a8e02c4dc1741be265a1"},{url:"/img/projects/book-searcher/add-book.png",revision:"beabb51f4623ae3c4d0f402293018daf"},{url:"/img/projects/book-searcher/back.png",revision:"4a3cd19f64ff69216065b34fc9a63e16"},{url:"/img/projects/book-searcher/books.png",revision:"dd1d4e6bdfd15445bef9e88faeffc889"},{url:"/img/projects/book-searcher/mockup.png",revision:"6061ea950e0c1ea763a4458d3ca0b494"},{url:"/img/projects/book-searcher/restricted-access.png",revision:"fcb936c414ddc483701b7e0014e8f449"},{url:"/img/projects/book-searcher/stack.png",revision:"6d1850fcb2fc05277f6ab12215f4b2ed"},{url:"/img/projects/book-searcher/thumbnail.png",revision:"63351c39ead91e5947ad02ca05a962c4"},{url:"/img/projects/ecommerce-sofa/basket.png",revision:"5c0764f3183b7cb88c0bdad6a1b1321b"},{url:"/img/projects/ecommerce-sofa/e2e-test.jpg",revision:"1f1be52f91aba7e722ccd417c05f62e8"},{url:"/img/projects/ecommerce-sofa/stack.png",revision:"0fc558d5e4f87f420e19af35f9a0d6c8"},{url:"/img/projects/ecommerce-sofa/thumbnail.png",revision:"5d9584d66d6beb193428e3fad7a8ada5"},{url:"/img/projects/finejob/back.png",revision:"b3ef661ac56f4a42ae4a56306d5b79f5"},{url:"/img/projects/finejob/dashboard.png",revision:"cf7d412f80c042af9f32adcb9effd154"},{url:"/img/projects/finejob/mockup.png",revision:"f8836352db3f9acd61839cd62357c4ec"},{url:"/img/projects/finejob/offers.png",revision:"92b7d6d9e21d0426362e863a9f17e794"},{url:"/img/projects/finejob/stack.png",revision:"7a39fe0d9fdf7bd387dbc5cbc7a19158"},{url:"/img/projects/finejob/thumbnail.png",revision:"98840352ca3f87236af4c87896ca7d17"},{url:"/img/projects/github-profile-readme-generator/readme.png",revision:"401ea1ee4ad25f514d1455d2369f0832"},{url:"/img/projects/github-profile-readme-generator/socials.png",revision:"c4580f4831be6eed6a8df8b4afe992cd"},{url:"/img/projects/github-profile-readme-generator/stack.png",revision:"e918e1c12585fe743a65cd7bb4920bf5"},{url:"/img/projects/github-profile-readme-generator/thumbnail.png",revision:"f621d50392cd15059f5bab2007ca5446"},{url:"/img/projects/pozywka/404.png",revision:"29cadb8fcf43a6cf026be0b7f96fa416"},{url:"/img/projects/pozywka/lighthouse.png",revision:"cd1dd1110562174c7f678fc8e2ffdf24"},{url:"/img/projects/pozywka/optimization-comparison.png",revision:"4c3e5212d868debcdcb0e098c29b9a4e"},{url:"/img/projects/pozywka/stack.png",revision:"0eb2c667a8d4d08358311db11f467462"},{url:"/img/projects/pozywka/thumbnail.png",revision:"1d44255515bf39fdb64a767fb8ceecab"},{url:"/img/projects/takenote/certificate.png",revision:"5bf8a10c9da2b453e5f263f1daef0262"},{url:"/img/projects/takenote/repo.png",revision:"082c00bc8f764c061adf5f009a0cdb99"},{url:"/img/projects/takenote/stack.png",revision:"1b6c50d36e8f8d759e4e51cce524f88a"},{url:"/img/projects/takenote/thumbnail.png",revision:"ef3bb600ae42b4e9bf9d08c215b07803"},{url:"/img/references/3motion.jpg",revision:"eb3d5ec7264e92538e63f06861fd3793"},{url:"/img/references/michal-miszczyszyn.jpg",revision:"ab9e3be4bcf732ae4465083ba0500157"},{url:"/img/references/olaf-sulich.png",revision:"b89b8a1f4235a17bee93277d85579415"},{url:"/img/references/szymon-hrabia.jpg",revision:"ec8ce16bca9e4fe4ea9d91483c684d30"},{url:"/manifest.json",revision:"0f0a746830817d65a8990d81e47ab188"},{url:"/maskable-android-icon-144x144.png",revision:"e5b8ebf5108e6b1a50653f5980e3478b"},{url:"/maskable-android-icon-192x192.png",revision:"20cddec2986a83e099017da06d7cc58c"},{url:"/maskable-android-icon-36x36.png",revision:"496eed6f9fce86ee1878c01c280d4230"},{url:"/maskable-android-icon-48x48.png",revision:"3f563008b910d795e7a974c0123b1ca0"},{url:"/maskable-android-icon-512x512.png",revision:"7e5a2d9966a508dd7f8106912ca916f9"},{url:"/maskable-android-icon-72x72.png",revision:"ba9948e97278599906691308e6309ee4"},{url:"/maskable-android-icon-96x96.png",revision:"d7c5ce2abcfb9a55ac737eea719bb7f0"},{url:"/maskable-apple-icon-114x114.png",revision:"990a642c140678a5f4d963057eb758fd"},{url:"/maskable-apple-icon-120x120.png",revision:"6fbef993f09744658224d70187e511d2"},{url:"/maskable-apple-icon-144x144.png",revision:"3af0891f434ab27d0034913e73eb2895"},{url:"/maskable-apple-icon-152x152.png",revision:"219652cc9f0afd12203b633a27a0edb2"},{url:"/maskable-apple-icon-180x180.png",revision:"909800a8811541304de982155c8a281c"},{url:"/maskable-apple-icon-57x57.png",revision:"3f87f83db286b80873800ff5571580d1"},{url:"/maskable-apple-icon-60x60.png",revision:"fbde0270b2d4cce43286f23a0d26402c"},{url:"/maskable-apple-icon-72x72.png",revision:"4329d6763716fccae32bf2b79326c729"},{url:"/maskable-apple-icon-76x76.png",revision:"dbd551aeb2f86989113a0192c06fab48"},{url:"/maskable-apple-icon-precomposed.png",revision:"8e4ad50c91ed97f58ab42e0b45e6173a"},{url:"/maskable-apple-icon.png",revision:"8e4ad50c91ed97f58ab42e0b45e6173a"},{url:"/maskable-ms-icon-144x144.png",revision:"59c3e663811ca760e42df4b96bd052d4"},{url:"/maskable-ms-icon-150x150.png",revision:"88e104ae77a089173208331f971e2692"},{url:"/maskable-ms-icon-310x310.png",revision:"310e9a2c9400260160b786389beaa580"},{url:"/maskable-ms-icon-70x70.png",revision:"e266366d04b1815a5e2997c646859ed2"},{url:"/regular-android-icon-144x144.png",revision:"7d68b43e7812ad4cbeb9f72ceb1320f4"},{url:"/regular-android-icon-192x192.png",revision:"a7133d3f4294fb05d19bd983cfb29955"},{url:"/regular-android-icon-36x36.png",revision:"0d2cb5c61c57c86394ea576a731befc5"},{url:"/regular-android-icon-48x48.png",revision:"5c3b8b1005ee9433bf4b253c12d38d80"},{url:"/regular-android-icon-512x512.png",revision:"eb62a05a712cfd730db37deddcd9b7fa"},{url:"/regular-android-icon-72x72.png",revision:"c35d9aa71e48973d0deba076dac73592"},{url:"/regular-android-icon-96x96.png",revision:"d68af3201c2fb69930e1907fc08e9c1a"},{url:"/regular-apple-icon-114x114.png",revision:"64450be80e9ac8c7b629f5b0f6c19408"},{url:"/regular-apple-icon-120x120.png",revision:"237b44d1ad49617a08e91926797a9ccd"},{url:"/regular-apple-icon-144x144.png",revision:"7d68b43e7812ad4cbeb9f72ceb1320f4"},{url:"/regular-apple-icon-152x152.png",revision:"75c58db6af92dfb0d41731d78b7af8e5"},{url:"/regular-apple-icon-180x180.png",revision:"7e920bb0d4c3a793ee8cf80270069fd4"},{url:"/regular-apple-icon-57x57.png",revision:"12418f96c0c0caf73cb0edae2eee525d"},{url:"/regular-apple-icon-60x60.png",revision:"4c59077809296c654c73c2dd3761d870"},{url:"/regular-apple-icon-72x72.png",revision:"c35d9aa71e48973d0deba076dac73592"},{url:"/regular-apple-icon-76x76.png",revision:"f51ed2f62dfd92428becca5c026c935e"},{url:"/regular-apple-icon-precomposed.png",revision:"74f3901f5abd5d37fd81f1d93a17fece"},{url:"/regular-apple-icon.png",revision:"74f3901f5abd5d37fd81f1d93a17fece"},{url:"/regular-ms-icon-144x144.png",revision:"7d68b43e7812ad4cbeb9f72ceb1320f4"},{url:"/regular-ms-icon-150x150.png",revision:"9a307f5f438b989dc5f590e7cbb8781e"},{url:"/regular-ms-icon-310x310.png",revision:"c7548cf7e8eaa3a14c9e3e76a7fdfac4"},{url:"/regular-ms-icon-70x70.png",revision:"e15b2c61b8e139c52fa74e3c0fd56eb2"},{url:"/svg/book.svg",revision:"687fa7a5e25ebd473078418cc5d059c3"},{url:"/svg/check.svg",revision:"af846be2e9be12a03118e41f0ceff21a"},{url:"/svg/chess.svg",revision:"ea97139f6ba932cdbc9d17d890bba738"},{url:"/svg/copy.svg",revision:"6fe8c514eaba9192e97e34e01ea68ec4"},{url:"/svg/cross.svg",revision:"0872295841284c418fb14660e659895f"},{url:"/svg/error.svg",revision:"34a9345981c1e8fff1001588dd73d3b5"},{url:"/svg/github.svg",revision:"db53b895a30a556735e44eedf629cbf4"},{url:"/svg/link.svg",revision:"dd983c1f9042009857656fda1f806c6a"},{url:"/svg/linkedin.svg",revision:"1b672494209b04ddacef5855acec6632"},{url:"/svg/logo.svg",revision:"538cf465a74840ec61572dacce1c4cf7"},{url:"/svg/moon.svg",revision:"fe22d74c0a34bdd756e4d784a8d76167"},{url:"/svg/offline.svg",revision:"17d5428c70537e0abd52e26134426fa5"},{url:"/svg/paper-plane.svg",revision:"13bc4075076ac041633b05834ce6eee9"},{url:"/svg/plus.svg",revision:"e6d18e865b860fa8549571a0ad61b1e4"},{url:"/svg/pushup.svg",revision:"7c0522a7fd8888455095ba1b6efc3c28"},{url:"/svg/quote.svg",revision:"3184f1050e98eee1ebf91839ed79497f"},{url:"/svg/right-arrow.svg",revision:"137eace9d071a54d5b4277f9b629fb3a"},{url:"/svg/right-top-arrow.svg",revision:"7ff358e4605ac438d9160cdd2a80ef2b"},{url:"/svg/rss.svg",revision:"a88c7e9f5aa837dc9dd42d99a146e409"},{url:"/svg/search.svg",revision:"43c8015828a8ee60fc4f6091a4f5b43b"},{url:"/svg/spotify.svg",revision:"1c2e6a9f298e917d23e20d9e93396d7a"},{url:"/svg/success.svg",revision:"74591c60915f3ef856bd8043823235b7"},{url:"/svg/sun.svg",revision:"6bdecf3187b0b41f505091362ccbdfcc"},{url:"/svg/techs/css.svg",revision:"96ca4d87056f39b82a8f7f872948a2af"},{url:"/svg/techs/cypress.svg",revision:"d28890cc60a6fce3406a94ab742dd977"},{url:"/svg/techs/docker.svg",revision:"0c2dac6768f6dda82b94355740ebc4b2"},{url:"/svg/techs/git.svg",revision:"40d076eb748c60acf9f0e98c648f89f0"},{url:"/svg/techs/html.svg",revision:"11b7a3096bc050e7f9122f8ed7d6e6bd"},{url:"/svg/techs/jest.svg",revision:"9e5aae668a48f20c97ad9bcb69ea3bcc"},{url:"/svg/techs/js.svg",revision:"198cb76713d274f61aa26a0aad940c72"},{url:"/svg/techs/mongodb.svg",revision:"02e9e856ec6522641d0500dffd164720"},{url:"/svg/techs/nestjs.svg",revision:"32f97f7430bbaf1c1ee5ebd47377860c"},{url:"/svg/techs/nextjs.svg",revision:"fc6c6a6992f42ead33bac59ddd26525e"},{url:"/svg/techs/nodejs.svg",revision:"896bb1e361a95a44c6435af4b6526a4a"},{url:"/svg/techs/postgresql.svg",revision:"9508281402ed67cbc66920ddadbdbaf3"},{url:"/svg/techs/react.svg",revision:"dfe96cf66caf135c036f7288c008b9b9"},{url:"/svg/techs/scss.svg",revision:"373498fff331c9dc22b12db16f1458fe"},{url:"/svg/techs/ts.svg",revision:"1d42e7a734ed09e5c413611bfa5db3eb"},{url:"/svg/techs/vue.svg",revision:"fbe9475278ffb36f746bd8d2639b0593"},{url:"/svg/techs/wordpress.svg",revision:"958cf94fa0e1397dee40bead77887a22"},{url:"/svg/twitter.svg",revision:"44a54e983b6d64c3431d20e8bf4ab02e"},{url:"/svg/warning.svg",revision:"3555401dec15899e8bf42917f5868c1a"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
