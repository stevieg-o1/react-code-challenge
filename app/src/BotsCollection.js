import React from "react";
import Bot from "./Bot";

function BotCollection({botCollection, addRemoveBot, deleteBot}) {
    return (
        <div>
            <h3>CHOOSE A BOT TO ENLIST IN YOUR ARMY:</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}className="ui five column grid">
              {botCollection.map(bot => (
                    <Bot
                        key={bot.id}
                        bot={bot}
                        addRemoveBot={addRemoveBot}
                        inArmy={false}
                        deleteBot={deleteBot}
                    />
                ))}
            </div>
        </div>    
    );
}
export default BotCollection