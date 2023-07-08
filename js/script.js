// Method #1




function showProducts(category) {

    const products = {
        chairProducts: [
            { name: 'Borba Chair', image: '/images/borba-chair.jpg', description: 'This is an awesome Borba Chair' },
            { name: 'Brow Chair', image: '/images/brow-chair.jpg', description: 'This is an awesome Brow Chair' },
            { name: 'Cute Chair', image: '/images/cute-chair.jpg', description: 'This is an awesome Cute Chair' },
            { name: 'Lamp Chair', image: '/images/lamp-chair.jpg', description: 'This is an awesome Lamp Chair' }
        ],
        electronicProducts: [
            { name: 'Dark Electronics', image: '/images/electronics-dark.jpg', description: 'This is an awesome Dark Electronics' },
            { name: 'Drone Electronics', image: '/images/electronics-drone.jpg', description: 'This is an awesome Drone Electronics' },
            { name: 'PC Electronics', image: '/images/electronics-pc.jpg', description: 'This is an awesome PC Electronics' },
            { name: 'White Phone', image: '/images/electronics-phone-white.jpg', description: 'This is an awesome White Phone' }
        ],
        kitchenProducts: [
            { name: 'Dark Kitchen', image: '/images/kitchen-dark.jpg', description: 'This is an awesome Dark Kitchen' },
            { name: 'Kitchen Edge', image: '/images/kitchen-edge.jpg', description: 'This is an awesome Kitchen Edge' },
            { name: 'Kitchen Interior', image: '/images/kitchen-interior.jpg', description: 'This is an awesome Kitchen Interior' },
            { name: 'Kitchen Main', image: '/images/kitchen-main.jpg', description: 'This is an awesome Kitchen Main' }
        ],

        sportProducts: [
            { name: 'Sports Bike', image: '/images/sports-bike.jpg', description: 'This is an awesome Sports Bike' },
            { name: 'Sports Dive', image: '/images/sports-dive.jpg', description: 'This is an awesome Sports Dive' },
            { name: 'Sports Fly', image: '/images/sports-fly.jpg', description: 'This is an awesome Sports Fly' },
            { name: 'Sports Parachute', image: '/images/sports-parachute.jpg', description: 'This is an awesome Sports Parachute' }
        ],

        wearProducts: [
            { name: 'Original Wears', image: '/images/wears-2.jpg', description: 'This is an awesome Original Wears' },
            { name: 'Cloth Wears', image: '/images/wears-clothes.jpg', description: 'This is an awesome Cloth wears' },
            { name: 'Engineer Wears', image: '/images/wears-engineer.jpg', description: 'This is an Engineer Wears' },
            { name: 'Men Wears', image: '/images/wears-men.jpg', description: 'This is an awesome Men Wears' }
        ],

    };

    const productSection = document.querySelector('.product-section');
    productSection.innerHTML = '';

    const selectedProducts = products[category];
    selectedProducts.forEach(product => {
        const img = document.createElement('img');
        const h2 = document.createElement('h2');
        const para = document.createElement('p');
        const div = document.createElement('div');

        img.src = product.image;
        img.alt = product.name;
        h2.innerText = product.name;
        para.innerText = product.description;
        div.appendChild(img);
        div.appendChild(h2);
        div.appendChild(para);

        div.classList.add('single-product');

        productSection.appendChild(div);
    });

}
