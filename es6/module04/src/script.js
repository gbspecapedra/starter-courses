import api from './api';

class App {
  //ao instanciar a classe, o método constructor é o primeiro a ser executado;
  constructor() {
    this.repositories = [];
    this.formEl = document.getElementById('repo-form');
    this.inputEl = document.querySelector('input[name=repository');
    this.listEl = document.getElementById('repo-list');
    this.buttonHandler();
  }

  buttonHandler() {
    this.formEl.onsubmit = event => this.addRepository(event);
  }

  setLoading(loading = true) {
    if (loading === true) {
      let loadingEl = document.createElement('span');
      loadingEl.appendChild(document.createTextNode('Carregando...'));
      loadingEl.setAttribute('id', 'loading');
      this.formEl.appendChild(loadingEl);
    } else {
      document.getElementById('loading').remove();
    }
  }

  async addRepository(event) {
    event.preventDefault(); //evitar o comportameno de carregamento da página;
    const valueInput = this.inputEl.value;
    if (valueInput.length === 0) return;

    this.setLoading();

    try {
      const response = await api.get(`/repos/${valueInput}`);
      const { name, description, html_url, owner: { avatar_url } } = response.data;

      this.repositories.push({
        name,
        description,
        avatar_url,
        html_url
      });

      this.inputEl.value = '';
      this.render();
    } catch (err) {
      alert('O repositório não existe!');
    }

    this.setLoading(false);
  }

  render() {
    this.listEl.innerHTML = '';
    this.repositories.forEach(repo => {
      let imgEl = document.createElement('img');
      imgEl.setAttribute('src', repo.avatar_url);

      let titleEl = document.createElement('strong');
      titleEl.appendChild(document.createTextNode(repo.name));

      let descriptionEl = document.createElement('p');
      descriptionEl.appendChild(document.createTextNode(repo.description));

      let linkEl = document.createElement('a');
      linkEl.setAttribute('target', '_blank');
      linkEl.setAttribute('href', repo.html_url);
      linkEl.appendChild(document.createTextNode('Acessar'));

      let itemList = document.createElement('li');
      itemList.appendChild(imgEl);
      itemList.appendChild(titleEl);
      itemList.appendChild(descriptionEl);
      itemList.appendChild(linkEl);

      this.listEl.appendChild(itemList);
    });
  }
}

new App();