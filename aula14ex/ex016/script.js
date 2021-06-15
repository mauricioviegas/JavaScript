function contar() {
   var txtI = document.querySelector('input#txtInicio') 
   var txtF = document.querySelector('input#txtFim')
   var txtP = document.querySelector('input#txtPasso')
   var res = document.querySelector('div#res')
   if (txtI.value == null || txtF.value == null || txtP.value == null || txtP.value <= 0) {
      window.alert('Impossível contar')
   } else {
      let ini = Number(txtI.value)
      let fim = Number(txtF.value)
      let pas = Number(txtP.value)
      res.innerHTML = `<p>Contando:</p><p>`
      if (ini < fim) {
         //contagem crescente
         for (let i = ini; i <= fim; i += pas) {
            res.innerHTML += `${i} \u{1F449}`
         }
      } else {
         //contagem regressiva
         for (let i = ini; i >= fim; i -= pas) {
            res.innerHTML += `${i} \u{1F449}`
         }
      }
      res.innerHTML += `\u{1F3C1}</p>`
   }
}
