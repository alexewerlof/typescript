import { bye } from './feeeky';

/**
 * Do something
 * @param message - the message to print
 * @return the value that should be returned
 */
async function say(message, strong = false): Promise<boolean> {
    console.log(bye(message));
    return true;
}

say('Alex');