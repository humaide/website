/* eslint-disable react/prop-types */

function AccordionContentElement({ title, content, iconName }) {

  const icons = import.meta.glob('/src/assets/icons/solid/light/*.svg', { eager: true, import: 'default' });
  const iconPath = `/src/assets/icons/solid/light/${iconName}.svg`;
  const iconSrc = icons[iconPath];

  return (
    <div className="flex flex-col w-full border border-white/25 p-8 m-1">
      <img src={iconSrc} alt={iconName} className="h-10 w-10 mb-2"/>
      <h2 className="text-base lg:text-lg font-semibold">{title}</h2>                      
      <p className="text-base lg:text-lg pb-2">{content}</p>            
    </div>
  )
}

export default AccordionContentElement