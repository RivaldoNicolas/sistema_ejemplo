const clientes = [
  { nombre: "Ana Pérez", email: "ana@correo.com", telefono: "555-1001" },
  { nombre: "Luis Ortega", email: "luis@correo.com", telefono: "555-1002" },
];

const pedidos = [
  {
    id: 1001,
    cliente: "Ana Pérez",
    fecha: "2026-08-02",
    estado: "Entregado",
    total: "$320.00",
  },
  {
    id: 1002,
    cliente: "Luis Ortega",
    fecha: "2026-08-02",
    estado: "En proceso",
    total: "$180.00",
  },
];

const usuarios = [
  { nombre: "Carlos Ruiz", email: "carlos@tienda.com", rol: "Admin" },
  { nombre: "Marta Díaz", email: "marta@tienda.com", rol: "Vendedor" },
];

function renderClientes() {
  const list = document.getElementById("clientes-list");
  if (!list) return;
  list.innerHTML = clientes
    .map(
      (cliente) => `
    <div class="item">
      <strong>${cliente.nombre}</strong>
      <p>${cliente.email}</p>
      <small>${cliente.telefono}</small>
    </div>
  `,
    )
    .join("");
}

function renderPedidos() {
  const list = document.getElementById("pedidos-list");
  if (!list) return;
  list.innerHTML = pedidos
    .map(
      (pedido) => `
    <tr>
      <td>#${pedido.id}</td>
      <td>${pedido.cliente}</td>
      <td>${pedido.fecha}</td>
      <td>${pedido.estado}</td>
      <td>${pedido.total}</td>
    </tr>
  `,
    )
    .join("");
}

function renderUsuarios() {
  const list = document.getElementById("usuarios-list");
  if (!list) return;
  list.innerHTML = usuarios
    .map(
      (usuario) => `
    <div class="item">
      <strong>${usuario.nombre}</strong>
      <p>${usuario.email}</p>
      <small>Rol: ${usuario.rol}</small>
    </div>
  `,
    )
    .join("");
}

function setupForms() {
  const clienteForm = document.getElementById("cliente-form");
  if (clienteForm) {
    clienteForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const nombre = document.getElementById("cliente-nombre").value;
      const email = document.getElementById("cliente-email").value;
      const telefono = document.getElementById("cliente-telefono").value;
      clientes.unshift({ nombre, email, telefono });
      renderClientes();
      clienteForm.reset();
    });
  }

  const usuarioForm = document.getElementById("usuario-form");
  if (usuarioForm) {
    usuarioForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const nombre = document.getElementById("usuario-nombre").value;
      const email = document.getElementById("usuario-email").value;
      const rol = document.getElementById("usuario-rol").value;
      usuarios.unshift({ nombre, email, rol });
      renderUsuarios();
      usuarioForm.reset();
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  renderClientes();
  renderPedidos();
  renderUsuarios();
  setupForms();
});
