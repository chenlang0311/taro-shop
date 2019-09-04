var phantom = require('phantom');

phantom.create().then(function(ph) {  
    ph.createPage().then(function(page) {
        page.property('viewportSize',{width:320,height:500}); //这里有坑，这height假如比页面高度小，以页面高度为主，若超过才生效
        let url = 'http://127.0.0.1:8848/mall/screen.html';
        page.open(url).then(function(status) {  
            page.render('./thumb.png').then(function(){  
                ph.exit();
            });
        });
    });
});