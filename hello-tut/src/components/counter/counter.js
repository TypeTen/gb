class Counter {
    a(vagrants, h1, count) {
        count = parseInt(count, 10) + parseInt(vagrants, 10);
        h1.innerHTML = count;
    }
    b(villagers, h1, count) {
        count = parseInt(count, 10) + parseInt(villagers, 10);
        h1.innerHTML = count;
    }
}

export default Counter;
