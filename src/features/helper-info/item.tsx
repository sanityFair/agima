import { ListItem, ListItemProps, Typography } from "@mui/material";
import styles from "./styles.module.css";

type Props = {
  order: number;
  title: string;
  questions: string[];
} & ListItemProps;

export const Item = ({ title, questions, order, ...props }: Props) => (
  <ListItem
    disableGutters
    {...props}
    alignItems="flex-start"
    className={styles["list-item"]}
  >
    <Typography variant="body1" fontWeight="bold">
      {order}. {title}
    </Typography>
    <div>
      {questions.map((question) => (
        <Typography variant="subtitle2" fontWeight="600" key={question}>
          {question}
        </Typography>
      ))}
    </div>
  </ListItem>
);
