export const fadeInOutAnimation = (i, n, t, d) => `
  @keyframes fadeInOutAnimation-${i} {
    0% {
      opacity: 0;
    }
    100% {
      opacity: ${i === 0 ? 1 : 0};
    }
    ${(i * 100 / n) - t * 100 / (d * n)}% {
      opacity: 0;
    }
    ${i * (100 / n)}% {
      opacity: 1;
    }
    ${((i + 1) * 100 / n) - t * 100 / (d * n)}% {
      opacity: 1;
    }
    ${(i + 1) * (100 / n)}% {
      opacity: 0;
    }
    ${100 - t * 100 / (d * n)}% {
      opacity: ${i === n - 1 ? 1 : 0};
    }
  }
  animation: fadeInOutAnimation-${i} ${d * n}s ease-in-out infinite;
`
