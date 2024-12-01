import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog"
import { FaCheck } from "react-icons/fa"
import { RxCross2 } from "react-icons/rx"

const DashboardComments = () => {
  const { currentUser } = useSelector((state) => state.user)

  const [comments, setComments] = useState([])
  // console.log(userPosts)

  const [showMore, setShowMore] = useState(true)
  const [commentIdToDelete, setCommentIdToDelete] = useState("")

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(`/api/comment/getcomments`)

        const data = await res.json()

        if (res.ok) {
          setComments(data.comments)

          if (data.comments.length < 9) {
            setShowMore(false)
          }
        }
      } catch (error) {
        console.log(error)
      }
    }

    if (currentUser.isAdmin) {
      fetchComments()
    }
  }, [currentUser._id])

  const handleShowMore = async () => {
    const startIndex = comments.length

    try {
      const res = await fetch(
        `/api/comment/getcomments?startIndex=${startIndex}`
      )

      const data = await res.json()

      if (res.ok) {
        setComments((prev) => [...prev, ...data.comments])

        if (data.comments.length < 9) {
          setShowMore(false)
        }
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleDeleteComment = async () => {
    try {
      const res = await fetch(
        `/api/comment/deleteComment/${commentIdToDelete}`,
        {
          method: "DELETE",
        }
      )

      const data = await res.json()

      if (res.ok) {
        setComments((prev) =>
          prev.filter((comment) => comment._id !== commentIdToDelete)
        )
      } else {
        console.log(data.message)
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-full p-3">
      {currentUser.isAdmin && comments.length > 0 ? (
        <>
          <Table>
            <TableCaption>A list of your recent comments.</TableCaption>

            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Date Updated</TableHead>
                <TableHead>Comments</TableHead>
                <TableHead>Number of Likes</TableHead>
                <TableHead>PostId</TableHead>
                <TableHead>UserId</TableHead>
                <TableHead>Delete</TableHead>
              </TableRow>
            </TableHeader>

            {comments.map((comment) => (
              <TableBody className="divide-y" key={comment._id}>
                <TableRow>
                  <TableCell>
                    {new Date(comment.updatedAt).toLocaleDateString()}
                  </TableCell>

                  <TableCell>{comment.content}</TableCell>

                  <TableCell>{comment.numberOfLikes}</TableCell>

                  <TableCell>{comment.postId}</TableCell>

                  <TableCell>{comment.userId}</TableCell>

                  <TableCell>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <span
                          onClick={() => {
                            setCommentIdToDelete(comment._id)
                          }}
                          className="font-medium text-red-600 hover:underline cursor-pointer"
                        >
                          Delete
                        </span>
                      </AlertDialogTrigger>

                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>

                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete your comment and remove your data from our
                            servers.
                          </AlertDialogDescription>
                        </AlertDialogHeader>

                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            className="bg-red-600"
                            onClick={handleDeleteComment}
                          >
                            Continue
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </TableCell>
                </TableRow>
              </TableBody>
            ))}
          </Table>

          {showMore && (
            <button
              onClick={handleShowMore}
              className="w-full text-blue-700 self-center text-sm py-7"
            >
              Show more
            </button>
          )}
        </>
      ) : (
        <p>You have no comments yet!</p>
      )}
    </div>
  )
}

export default DashboardComments
