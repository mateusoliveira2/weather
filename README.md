# Sistema de previsão do tempo

Versão desenvolvia para code challenge, apresentando alguns pontos de melhoria para conclusão fiel ao requerido.

## Como rodar

### `npm`
### `npm start`

Abra [http://localhost:3000](http://localhost:3000) para acessar sistema.

# Pontos pendentes

- Adicionar componente de previsão com base no turno do dia (manhã, tarde, noite). Na API usada essas informações não vinheram, sendo necessário fazer novas queries para montar o componente. 

- Usar @testing-library para fazer o teste dos componentes e garantir que o conteúdo mostrado está como esperado.

- Unificar como é feita a estilização. Como é necessário fazer adaptação para mobile e tem a página do Tempo da Cidade muda de estilização de acordo com os valores, é melhor usar pré processadores CSS para concentrar. Atualmente está uma parte feita em arquivo .css e outra sendo passada por object. 

- Ser mais fiel ao design proposto. Mais especificamente: buscando a fonte usada e usando grid para alguns componentes ficarem melhor alinhados. 
