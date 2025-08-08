function angryProfessor(k, a) {
    let onTime = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] <= 0) {
            onTime++;
            if (onTime >= k) return "NO"; // Early exit if class isn't cancelled
        }
    }
    return "YES";
}
