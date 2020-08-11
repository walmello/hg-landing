const label = "c-dark tx-bold tx-upper"
const input = "brl-none brt-none brr-none brb-c-primary w-100 tx-75"

module.exports = /*html*/`
    <section id="opt-in" class="p-1rem px-10">
    <h2 class="${title}">Comece agora mesmo a traçar o sucesso do seu negócio</h2>
    <form class="tx-2rem p-1rem px-20LG px-20MD">
        <div class="p-1rem tx-75">
            <label class="${label}">Nome</label><br/>
            <input class="${input}">
        </div>
        <div  class="p-1rem tx-75">
            <label class="${label}">Email</label><br/>
            <input class="${input}">
        </div>
        <div class="p-1rem tx-75">
            <label class="${label}">Nome da empresa</label><br/>
            <input class="${input}">
        </div>
        <div class="p-1rem tx-75">
            <label class="${label}">Quanto investe em marketing atualmente?</label><br/>
            <select class="${input}" name="" id="">
                <option value="">R$ 3.000,00 a R$ 5.000,00</option>
                <option value="">R$ 5.000,00 a R$ 10.000,00</option>
                <option value="">R$ 10.000,00 a R$ 25.000,00</option>
                <option value="">Mais de R$ 25.000,00</option>
            </select>
        </div>
        <div class="p-1rem tx-75">
            <label class="${label}">Mensagem</label><br/>
            <textarea class="${input} h-4rem" style="margin-bottom: -2px"></textarea><br/>
        </div>
        <div class="flx j-between px-1rem">
            <div></div>
            <button type="submit" class="br-none bg-dark c-white br-rad-05rem p-1rem tx-1rem w-8rem tx-upper tx-bold">Enviar</button>
        </div>
    </form>
    </section>
`