try {
    const icons = require('simple-icons');
    console.log('Root keys count:', Object.keys(icons).length);
    const amazon = Object.keys(icons).filter(k => k.match(/amazon/i));
    console.log('Root Amazon matches:', amazon);
} catch (e) {
    console.error(e);
}
