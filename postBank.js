const data = [
  {
    id: 1,
    upvotes: 257,
    title: 'Lorem Ipsum Dolor Sit Amet',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit in dui eget dignissim. Etiam cursus ex eget iaculis luctus. Curabitur sagittis orci a tellus vulputate. Integer ut sapien massa. Nunc massa tortor, tincidunt vel sem sed, facilisis posuere leo. Donec sed massa feugiat odio rhoncus suscipit aliquet id.',
    name: 'Evazahr',
    date: new Date(Date.now() - 14400000),
  },
  {
    id: 2,
    upvotes: 221,
    title: 'Integer Purus Leo',
    content:
      'Integer purus leo, condimentum ac sapien eu, consequat cursus dui. Maecenas ultricies velit nunc, vel ultrices ex euismod eget. Vivamus nisl nulla, aliquet sit amet nisl vel, consequat ultrices erat. Nam egestas eget tellus quis varius. Nunc quis nulla feugiat, facilisis ipsum et, egestas justo. Suspendisse scelerisque pretium lorem, eget.',
    name: 'Druxium',
    date: new Date(Date.now() - 86400000),
  },
  {
    id: 3,
    upvotes: 198,
    title: 'Blandit Vitae',
    content:
      'Fusce ac erat viverra, blandit lorem vitae, lobortis est. Phasellus posuere dui justo, at posuere tortor iaculis sit amet. Curabitur semper in velit id facilisis. Praesent iaculis justo magna, et convallis sem scelerisque at. Nullam pretium dictum porta. Donec vestibulum nunc urna, eu condimentum lorem dictum quis. Praesent mollis diam.',
    name: 'Ophiane',
    date: new Date(Date.now() - 900000),
  },
  {
    id: 4,
    upvotes: 171,
    title: 'Odio Non Leo',
    content:
      'Aenean viverra pulvinar risus in scelerisque. Nunc quis odio non leo tempor pretium sed mollis mauris. Maecenas ultrices nec quam a cursus. Duis rhoncus lorem et placerat tincidunt. Morbi sed nibh aliquet, varius ipsum a, eleifend neque. Curabitur volutpat vitae augue sit amet condimentum. Nam suscipit dictum nisi, nec porta.',
    name: 'Ritosh',
    date: new Date(Date.now() - 5000),
  },
  {
    id: 5,
    upvotes: 166,
    title: 'Volutpat Consequat Eros Euismod',
    content:
      'Etiam ultricies in dui ac porttitor. Nulla venenatis interdum tortor, volutpat consequat eros euismod in. Donec non tincidunt felis, sit amet luctus erat. Sed eget diam maximus, iaculis urna in, ullamcorper eros. Nullam semper dui et ultricies accumsan. Donec eget lacus elementum, varius orci at, interdum ante. Pellentesque egestas aliquam.',
    name: 'Ziless',
    date: new Date(Date.now() - 10000000),
  },
  {
    id: 6,
    upvotes: 145,
    title: 'Tempor Accumsan - Mauris Pharetra Ante Nunc',
    content:
      'Nunc egestas tempor mi sit amet mattis. Aliquam erat volutpat. Ut tempor accumsan ex, in consequat nunc. Etiam felis quam, accumsan sit amet nulla non, interdum tristique arcu. Integer ut nisl ipsum. Integer ac eros elit. Mauris pharetra ante nunc, sit amet elementum turpis efficitur in. Sed vitae purus in.',
    name: 'Soqor',
    date: new Date(Date.now() - 5000000),
  },
  {
    id: 7,
    upvotes: 126,
    title: 'Tristique! Nulla Eget Suscipit Tortor',
    content:
      'Morbi tristique elit risus, nec condimentum lorem egestas sit amet. Nulla eget suscipit tortor, nec rutrum nibh. In hac habitasse platea dictumst. Mauris mauris eros, porttitor at aliquam sed, malesuada non neque. Quisque ut ipsum nec mi ultrices porttitor quis eget eros. Curabitur sollicitudin justo quis ligula rhoncus scelerisque. In.',
    name: 'Etior',
    date: new Date(Date.now() - 600000),
  },
  {
    id: 8,
    upvotes: 114,
    title: 'Pellentesque feugiat? Aliquet Sit Amet',
    content:
      'Sed augue lorem, facilisis eu enim vel, volutpat facilisis nunc. In faucibus erat quis rutrum. Sed nec mi egestas, aliquet tellus nec, dictum tortor. Phasellus interdum in enim id sodales. Donec in varius sem. Quisque euismod tellus arcu, vel vehicula turpis pellentesque quis. Vivamus nec ultrices mi. Pellentesque feugiat.',
    name: 'Meylu',
    date: new Date(Date.now() - 60000000),
  },
  {
    id: 9,
    upvotes: 102,
    title: 'Vestibulum Sapien Vulputate',
    content:
      'Maecenas lacinia urna arcu, sit amet vestibulum sapien vulputate quis. Pellentesque vestibulum, ipsum ut fringilla consequat, lacus lorem vestibulum felis, quis porttitor lorem nisi a arcu. In pretium egestas enim, at ornare tortor convallis a. Praesent ligula erat, commodo sed felis in, dictum blandit mauris. Vivamus nunc enim, sodales vel.',
    name: 'Rheviar',
    date: new Date(Date.now() - 3000000),
  },
  {
    id: 10,
    upvotes: 59,
    title: 'Justo Vel Imperdiet Interdum, Urna Massa Imperdiet',
    content:
      'In facilisis, purus eu aliquet porttitor, lorem justo mattis sapien, et interdum tortor orci eu felis. Nullam lacinia dui quis eleifend suscipit. Vivamus condimentum nunc non congue efficitur. In quis eros dignissim, sagittis est et, venenatis metus. Etiam dignissim quis nibh at consequat. Nunc non mi aliquet, pulvinar nulla a.',
    name: 'Zallaes',
    date: new Date(Date.now() - 6000000),
  },
  {
    id: 11,
    upvotes: 46,
    title: 'Nullam Cursus',
    content:
      'Duis tempus urna non vulputate consectetur. Nullam cursus, justo vel imperdiet interdum, urna massa imperdiet nulla, a laoreet neque risus et lectus. Integer varius fermentum ornare. Maecenas ornare libero non aliquam consectetur. Donec in justo non libero viverra laoreet ac id nunc. Ut ac mi urna. Nunc sem dui, posuere.',
    name: 'Chalyn',
    date: new Date(Date.now() - 50000),
  },
  {
    id: 12,
    upvotes: 30,
    title: 'Quisque Pulvinar Tellus Vel Mattis',
    content:
      'Quisque pulvinar tellus vel mattis venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis aliquet ex at lacus sodales, eget malesuada ex porttitor. Morbi volutpat, tellus tincidunt sagittis ultricies, sem tortor pulvinar ante, vitae gravida enim mauris ac nulla. Curabitur euismod imperdiet lectus ac volutpat. Etiam sed.',
    name: 'Esufyne',
    date: new Date(Date.now() - 6000000),
  },
  {
    id: 13,
    upvotes: 21,
    title: 'Varius Magna: Turpis, Ac Tempus Dui Quis',
    content:
      'Cras cursus justo nec tortor sodales, tincidunt posuere massa pulvinar. Quisque neque ex, venenatis eget ante nec, volutpat ultrices elit. Pellentesque varius magna turpis, ac tempus dui convallis quis. Quisque porttitor semper purus quis scelerisque. Donec consectetur ullamcorper risus, nec consectetur ligula laoreet sit amet. Morbi non eros quam. In.',
    name: 'Grikius',
    date: new Date(Date.now() - 60000),
  },
  {
    id: 14,
    upvotes: 10,
    title: 'Dignissim Mauris Ac Dapibus',
    content:
      'Phasellus dignissim mauris ac dapibus aliquet. Pellentesque congue nibh rutrum, fringilla arcu eu, dignissim est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam non ligula eleifend, interdum erat a, ornare nulla. Nunc in aliquam ex, non maximus ipsum. Praesent varius metus vitae nibh rutrum.',
    name: 'Avile',
    date: new Date(),
  },
]

const list = () => {
  return [...data] // Notice that we're returning a copy of the array, so the original data is safe. This is called 'immutability'.
}

const find = (id) => {
  const post = data.find((post) => post.id === Number(id))
  return { ...post } // Again, we copy the post data before returning so the original information is safe.
}

module.exports = { list: list, find: find }
