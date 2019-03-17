faker.locale = 'pt_BR'
const peoples = []
for (let i = 0; i < 20; i++) {
    var randomCard = faker.helpers.createCard(); // random contact card containing many properties
    const person = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      address: {
          city: faker.address.city(),
          country: faker.address.country(),
          phone: faker.phone.phoneNumber(),
          state: faker.address.stateAbbr(),
          street: faker.address.streetName(),
          zipCode: faker.address.zipCode()
      },
      birthDay: faker.date.past(),
      image: faker.image.avatar(),
      email: faker.internet.email(),
      userName: faker.internet.userName(),
      password: faker.internet.password(),
      ip: faker.internet.ip(),
      empresa: randomCard.company.name,
    }
    peoples.push(person)
}
const $html = `
    <table>
      <thead>
        <tr>
          <th>firstName</th>
          <th>lastName</th>
          <th>userName</th>
          <th>email</th>
          <th>Rua</th>
          <th>Telefone</th>
          <th>CEP</th>
          <th>Cidade</th>
          <th>Estado</th>
          <th>Empresa</th>
        </tr>
      </thead>
      <tbody>
        ${peoples.map(people => `<tr>
          <td>${people.firstName}</td>
          <td>${people.lastName}</td>
          <td>${people.userName}</td>
          <td>${people.email}</td>
          <td>${people.address.street}</td>
          <td>${people.address.phone}</td>
          <td>${people.address.zipCode}</td>
          <td>${people.address.city}</td>
          <td>${people.address.state}</td>
          <td>${people.empresa}</td>
          </tr>`)}
      </tbody>
    </table>
  `;
const $root = document.querySelector('#root')
$root.innerHTML = $html
// const $wrap = document.createElement("div")
/* innerHTML -> apaga todo o conteúdo na página
insertBefore -> insere o texto 'dentro' da tag específicada mantendo o resto
 */
// $wrap.innerHTML = $html
// $root.insertBefore($wrap,null)
