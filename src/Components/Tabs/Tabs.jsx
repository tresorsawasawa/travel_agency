import { useState } from 'react';
import { FaCar } from 'react-icons/fa';
import './Tabs.scss';

const Tabs = () => {
  const tabs = [
    {
      id: 1,
      icon: <FaCar />,
      name: 'Reservation',
      classCondition1: 'tabs active-tabs',
      classCondition2: 'tabs',
    },
    {
      id: 2,
      icon: <FaCar />,
      name: 'Mes Voyages',
      classCondition1: 'tabs active-tabs',
      classCondition2: 'tabs',
    },
    {
      id: 3,
      icon: <FaCar />,
      name: 'Check-in',
      classCondition1: 'tabs active-tabs',
      classCondition2: 'tabs',
    },
  ];

  const TravelTypeData = [
    { id: 1, name: 'Aller simple', value: 'Aller simple' },
    { id: 2, name: 'Aller retour', value: 'Aller retour' },
  ];

  if (TravelTypeData.filter((item) => item.name === item.value)) {
    console.log('Yes');
  } else {
    console.log('No');
  }

  const optionValue = document.getElementsByClassName('option');
  console.log(optionValue.value);
  // const [checkTravelType, setCheckTravelType] = useState('');

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="TabsContainer">
      <div className="bloc-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={
              toggleState === tab.id ? tab.classCondition1 : tab.classCondition2
            }
            onClick={() => toggleTab(tab.id)}
            type="button"
          >
            {tab.icon}
            {tab.name}
          </button>
        ))}
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? 'content  active-content' : 'content'}
        >
          <div className="searchItem">
            <input type="text" className="departSearchInput" placeholder="De" />
          </div>

          <div className="searchItem">
            <input type="text" className="departSearchInput" placeholder="De" />
          </div>

          <div className="searchItem">
            <label htmlFor="travelsType">
              Voyage
              <select name="travelsType" id="travelsType">
                {TravelTypeData.map((travel) => (
                  <option
                    className="option"
                    key={travel.id}
                    value={travel.value}
                  >
                    {travel.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>

        <div
          className={toggleState === 2 ? 'content  active-content' : 'content'}
        >
          <h2>Content 2</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>

        <div
          className={toggleState === 3 ? 'content  active-content' : 'content'}
        >
          <h2>Content 3</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt. à
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
