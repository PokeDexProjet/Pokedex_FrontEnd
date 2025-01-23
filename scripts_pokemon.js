// Function to fetch and display Pokémon details
async function getPokemonDetails() {
  // 获取 URL 中的查询参数（Pokémon ID）
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

  // 如果没有提供 ID，则显示提示信息
  if (!id) {
    document.getElementById('pokemon-detail').innerHTML = '<p>No Pokémon ID provided.</p>';
    return;
  }

  try {
    // 请求后端 API 获取对应 Pokémon 的详情
    const response = await fetch(
      console.log(`Fetching details for Pokémon ID: ${id}`);
      console.log(`Requesting URL: https://route-backend-huangjingl-dev.apps.rm3.7wse.p1.openshiftapps.com/api/pokemons/${id}`);

      `https://route-backend-huangjingl-dev.apps.rm3.7wse.p1.openshiftapps.com/api/pokemons/${id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json', // 确保发送正确的请求头
        },
        credentials: 'include', // 如果需要传递凭证（如 Cookies），保持此配置
      }
    );

    // 检查响应是否成功
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // 获取 Pokémon 数据
    const pokemon = await response.json();

    // 如果 Pokémon 数据为空，显示提示信息
    if (!pokemon) {
      document.getElementById('pokemon-detail').innerHTML = '<p>Pokémon not found.</p>';
      return;
    }

    // 获取显示 Pokémon 详情的容器
    const container = document.getElementById('pokemon-detail');

    // 动态生成 Pokémon 详情内容
    container.innerHTML = `
      <h1>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
      <img src="${pokemon.image}" alt="${pokemon.name} image">
      <p><strong>Type:</strong> ${pokemon.type.join(', ')}</p>
      <p><strong>Description:</strong> ${pokemon.description}</p>
    `;
  } catch (error) {
    console.error('Error fetching Pokémon details:', error);

    // 如果请求出错，显示错误信息
    document.getElementById('pokemon-detail').innerHTML =
      '<p>Error fetching Pokémon details. Please try again later.</p>';
  }
}

// 页面加载时调用函数
window.onload = getPokemonDetails;
