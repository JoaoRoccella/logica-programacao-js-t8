const
    nota1 = 3,
    nota2 = 0,
    nota3 = 7,
    media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    console.log(`O aluno foi APROVADO com média ${media.toFixed(2)}`);
} else if (media >= 5) {
    console.log(`O aluno está de EXAME com média ${media.toFixed(2)}`);
} else {
    console.log(`O aluno foi REPROVADO com média ${media.toFixed(2)}`);
}