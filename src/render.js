export const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend'
};

export const renderTemplate =(container, template, plase) => {
  container.insertAdjacentHTML(plase, template);
};

