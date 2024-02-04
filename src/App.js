// App.jsx

import React from "react";
import AlertMessage from "./components/message/index";

const App = () => {
  // Xəbərdarlıq mesajları üçün array yaradiriq
  const alertMessages = [
    { message: "Uğurla tamamlandı!", type: "success" },
    { message: "Xəta baş verdi!", type: "error" },
    { message: "Əlavə məlumat!", type: "info" },
  ];

  return (
    <div>
      <h1>Xəbərdarlıq Mesajları</h1>

      {alertMessages.map((element) => (
        <AlertMessage message={element.message} type={element.type} />
      ))}
    </div>
  );
};

export default App;
