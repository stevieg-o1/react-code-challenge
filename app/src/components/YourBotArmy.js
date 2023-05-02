import React from "react";
import Bot from "./Bot";

function YourBotArmy({botArmy, addRemoveBot, deleteBot}) {
    return (
        <div className="ui segment bot-army" style={{backgroundColor: '#DCDCDC'}}>
            <h3>YOUR BOT ARMY:</h3>
            <div className="ui five column grid">
                <div className="row bot-army-row">
                    {botArmy.map(bot => (
                        <Bot
                            key={bot.id}
                            bot={bot}
                            addRemoveBot={addRemoveBot}
                            inArmy={true}
                            deleteBot={deleteBot}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default YourBotArmy;