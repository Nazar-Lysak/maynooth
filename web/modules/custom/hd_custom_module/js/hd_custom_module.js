(function ($, Drupal, once) {
    Drupal.behaviors.customModuleBlockBehavior = {
      attach: function (context, settings) {

        const bank = document.querySelector('#bank', context);
        const amount = document.querySelector('#amount', context);
        const advance = document.querySelector('#advance', context);
        const months = document.querySelector('#months', context);

        const banks = settings.hd_custom_module.banks;
        const out = document.querySelector('.result-content', context);

        let bankVal = banks[1],
            amountVal = 0,
            advanceVal = 0,
            monthVal = 0;

            out.innerHTML = `<h4>Full sum: --- $</h4>
          <h4>Pay per month:  --- $</h4>`;

        const checkInputFields = (sum, pers, m) => {
          sum  < 1000 || sum  > 10000
          ? amount.classList.remove("chacked")
          : amount.classList.add("chacked");

          pers < 10 || pers > 90
          ? advance.classList.remove("chacked")
          : advance.classList.add("chacked");

          m < 3 || m > 36
          ? months.classList.remove("chacked")
          : months.classList.add("chacked");
        }

        [bank, amount, advance, months].forEach(el => {
          el.oninput = e => {
            e.target.id == 'bank'    ? bankVal    = banks[+e.target.value] :
            e.target.id == 'amount'  ? amountVal  = +e.target.value :
            e.target.id == 'advance' ? advanceVal = +e.target.value :
            e.target.id == 'months'  ? monthVal   = +e.target.value :
            NULL;
            restValues(bankVal, amountVal, advanceVal, monthVal);
          }
        })

        const restValues = (bankParam, amountParam, advanceParam, monthParam) => {
          checkInputFields(amountParam, advanceParam, monthParam);
          let count = 0;
          [amount, advance, months].forEach(el => !!el.className ? count = count + 1 : count--);

        if (count < 3) {
          out.innerHTML = `
          <h4>Full sum: --- $</h4>
          <h4>Pay per month:  --- $</h4>
            `
        } else if(advanceParam < 50 && count === 3) {
            const sumToPay = amountParam * (1 - advanceParam / 100);
            const fullPay = sumToPay * (1 + bankParam.percentage / 100);
            const monthlyPay = fullPay / monthParam;
            out.innerHTML = `
              <h4>Full sum: ${fullPay.toFixed(2)}</h4>
              <h4>Pay per month: ${monthlyPay.toFixed(2)}</h4>
            `
          } else if(advanceParam >= 50 && count === 3) {
            const sumToPay = amountParam * (1 - advanceParam / 100);
            const fullPay = sumToPay * (1 + 0.5 / 100);
            const monthlyPay = fullPay / monthParam;
            out.innerHTML = `
              <h4>Full sum: ${fullPay.toFixed(2)}</h4>
              <h4>Pay per month: ${monthlyPay.toFixed(2)}</h4>
            `
          }
        }
      }
    };


})(jQuery, Drupal, once);

