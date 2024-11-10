function customRender(reactElement, container){
    
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)
    // container.appendChild(domElement)

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.prop) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement);
}

const reactElement = {
    type: 'a', 
    props: {
        href: "https://google.com",
        target: 'blank'
    },
    childern: 'Click me to visit google'
}
const mainContainer = document.querySelector('#root');
customRender(reactElement, mainContainer); // This is a custom method which tells us .where to inject and .what to inject
