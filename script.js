
        // Função para fechar o console SQL
        function closeConsole() {
            const consoleDiv = document.getElementById('sql-console');
            consoleDiv.style.display = 'none';
        }

        // Função para limpar a consulta SQL
        function clearQuery() {
            const textarea = document.querySelector('.sql-console textarea');
            textarea.value = '';
        }
        // Função para mostrar os filtros de acordo com a tabela selecionada
        function showFilters(tableName) {
            // Primeiro, esconde todos os filtros
            const allFilters = document.querySelectorAll('.filters');
            allFilters.forEach(filter => filter.style.display = 'none');

            // Mostra os filtros específicos da tabela escolhida
            const specificFilter = document.getElementById(`${tableName}-filters`);
            if (specificFilter) {
                specificFilter.style.display = 'block';
            }
        }

        // Função para abrir/fechar o console SQL
        function toggleConsole() {
            const consoleDiv = document.getElementById('sql-console');
            const allFilters = document.querySelectorAll('.filters');
            if (consoleDiv.style.display === 'none') {
                consoleDiv.style.display = 'block';

                // Esconde todos os filtros ao abrir o terminal
                allFilters.forEach(filter => filter.style.display = 'none');
            } else {
                consoleDiv.style.display = 'none';
            }
        }

        // Função para executar a consulta SQL
        function executeSQL() {
            const resultsDiv = document.getElementById('sql-results');
            resultsDiv.style.display = 'block';
            resultsDiv.style.backgroundColor = 'yellow';


            // ocultar a tabela (se estiver sendo exibida)
            // supondo que você tenha uma div com a classe 'table-view' para exibir a tabela
            const tableView = document.querySelector('.table-view');
            tableView.style.display = 'none';

            // adicionar o código para processar a consulta SQL e exibir os resultados
        }

        // Variáveis para rastrear o arrasto do menu
        let isDraggingMenu = false;
        let startX = 0;
        let startMenuWidth;

        // Inicializando o arrasto do menu
        document.querySelector('.menu').addEventListener('mousedown', function (event) {
            isDraggingMenu = true;
            startX = event.clientX;
            startMenuWidth = this.offsetWidth;
            document.body.classList.add('no-select');
        });

        // Evento para monitorar o movimento do mouse durante o arrasto
        document.addEventListener('mousemove', function (event) {
            if (isDraggingMenu) {
                let deltaX = event.clientX - startX;
                let newMenuWidth = startMenuWidth + deltaX;
                document.querySelector('.menu').style.width = newMenuWidth + 'px';
            }
        });

        // Evento para finalizar o arrasto
        document.addEventListener('mouseup', function () {
            isDraggingMenu = false;
            document.body.classList.remove('no-select');
        });

        // Arrastar o console

        document.querySelector('.sql-console').addEventListener('mousedown', function (event) {
            // Verifica se o clique foi no próprio console e não em um filho dele.
            if (event.target === this) {
                event.preventDefault(); // Previne o comportamento padrão.

                isDraggingConsole = true;
                offsetX = event.clientX - this.getBoundingClientRect().left;
                offsetY = event.clientY - this.getBoundingClientRect().top;
                document.body.classList.add('no-select');
            }
        });

        // Evento para monitorar o movimento do mouse durante o arrasto do console
        document.addEventListener('mousemove', function (event) {
            if (isDraggingConsole) {
                const consoleDiv = document.getElementById('sql-console');
                consoleDiv.style.left = (event.clientX - offsetX) + 'px';
                consoleDiv.style.top = (event.clientY - offsetY) + 'px';
            }
        });

        // Evento para finalizar o arrasto do console
        document.addEventListener('mouseup', function () {
            isDraggingConsole = false;
            document.body.classList.remove('no-select');
        });

        // Painel de resultado possível de redimensionar verticalmente
        let isDraggingHandle = false;
        let startHandleY = 0;
        let startResultsHeight;
        let startHandleTop;
        const maxHeight = window.innerHeight - 100; // Por exemplo, definindo a altura máxima como a altura da janela menos 100 pixels.


        const resultsElement = document.querySelector('.sql-results');
        // Inicializando o arrasto do handle
        document.querySelector('.resize-handle').addEventListener('mousedown', function (event) {
            isDraggingHandle = true;
            startHandleY = event.clientY;
            startResultsHeight = resultsElement.getBoundingClientRect().height;
            startResultsTop = resultsElement.getBoundingClientRect().top;
            resultsElement.style.zIndex = 200; // Aumenta o z-index enquanto está sendo redimensionado
            document.body.classList.add('no-select');
        });

        // Durante o arrasto
        document.addEventListener('mousemove', function (event) {
            if (isDraggingHandle) {
                let deltaY = startHandleY - event.clientY;
                let newResultsHeight = Math.max(10, Math.min(maxHeight, startResultsHeight + deltaY));
                let newResultsTop = startResultsTop - deltaY;
                resultsElement.style.zIndex = 100; // Retorna o z-index ao valor original após o redimensionamento
                document.body.classList.remove('no-select');

                resultsElement.style.height = newResultsHeight + 'px';
                resultsElement.style.top = newResultsTop + 'px';
            }
        });

        // Finalizando o arrasto
        document.addEventListener('mouseup', function () {
            isDraggingHandle = false;
            document.body.classList.remove('no-select');
        });


        function showTableWithFilters(tableName) {
            // Primeiro, exibe os filtros correspondentes
            showFilters(tableName);

            // Em seguida, mostra a tabela
            showTable(tableName);
        }

        function showTable(tableName) {
            const resultsDiv = document.getElementById('sql-results');
            resultsDiv.style.display = 'block';
            resultsDiv.style.backgroundColor = 'yellow';
            // ocultar os resultados da consulta SQL (se estiverem sendo exibidos)
            const consoleDiv = document.getElementById('sql-console');
            consoleDiv.style.display = 'none';

            // Aqui, você pode adicionar código para realmente carregar e exibir os dados da tabela correspondente.
        }

    // Aqui, você pode adicionar código para realmente carregar e exibir os dados da tabela correspondente.
    // Por enquanto, estou apenas definindo uma cor de fundo para fins de visualização.