
import { type BadgeProps } from "@tailus/themer";
import { Caption } from "./Caption";
import Badge from "./Badge";

const intents:BadgeProps["intent"][] = ["primary", "secondary", "accent", "info", "danger", "warning", "success", "gray"]
const variants:BadgeProps["variant"][] = ["solid", "outlined", "soft"]

export default  function Intents  ()  {
    return (
        <div className="grid grid-cols-3 gap-6 py-12 justify-center">
            {
                variants.map((variant, index) => (
                    <div key={index} className="space-y-4">
                        <Caption className="capitalize">{variant}</Caption>
                        {
                            intents.map((intent, index) => (
                                <Badge key={index} intent={intent} variant={variant} className="capitalize">
                                    {intent}
                                </Badge>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    );
};