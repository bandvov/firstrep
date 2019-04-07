function factorial(x) {
    if (x <= 1) {
      return 1;
    }
    return x * factorial(x - 1);
  }
document.write('<br> факторіал ' + input + '=' + factorial(input));