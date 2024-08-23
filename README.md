# avaliacao-jp
Avaliação Sobre Git

Criando repositório :

new
Repository name (nome do projeto)
Botar Public (para o professor acessar)
Initialize this repository with:
Add a README file     (Sempre botar)
Só Crirar

Processo De Clone :

Vai em code 
SSH 
copia o link
abrir o GitBash
cd Documents/ (ENTRAR DENTRO DA PASTA DOCUMENTS)
git clone e copia o link e enter  (COMANDO PARA CLONAR O SEU CODIGO QUE ESTÁ NO GIT)
cd Nome Do Repositório (ENTRAR NA PASTA DO SEU PROJETO)
Code . (Serve para abrir o visual)

para comitar

botar mensagem do que fez (SEMPRE IMPORTANTE BOTAR O QUE VOCÊ FEZ DE MUDANÇA)
apertar no + (preparando para comitar as suas mudanças)
dar commit  (comitando seu código para fazer as mudanças)



git pages

Your repositories > Selecionar o da sua escolha > settings > Pages > Onde está none de preferencia usar a Main > dar um save > esperar gerar o url para acessar.

sempre acha o html primeiro se tiver dentro da pasta o index ele puxa o readme
se não tiver nada fica vazio

GitBash

abra o gitbash
ls -al ~/.ssh (verifica se existe uma chave criada já no seu pc)

ssh-keygen -t ed25519-C "riansdias@gmail.com" (Criando uma nova chave(id) para o meu pc)

eval "$(ssh-agent-s)" (você irá inicializar um criador de chave privada)

sdd-add~/.ssh/id_ed25519 (adicionando uma chave privada)

clip <~/.ssh/id_ed25519.pub (copiando a sua chave ssh do seu pc)

vai abrir o git > settings > shh and GPG Keys > New SSH key > Colar (Sempre colocar um titulo de referencia do lugar da chave) (serve para configurar sua key do ssh com o GitHub)

ssh -T git@github.com > yes. (Testa a conexão da chave)





